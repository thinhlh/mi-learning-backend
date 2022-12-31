import { BadRequestException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../role/role';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { request } from 'http';
import { Http2ServerRequest } from 'http2';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { I18n, I18nService } from 'nestjs-i18n';

export type KeyOfUser = Array<keyof User>;

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly httpService: HttpService,
    @I18n() private readonly i18nService: I18nService,
  ) {
  }
  async createUser(createUserDto: CreateUserDto): Promise<User> {

    // if (! await this.userRepository.findOneBy({ email: createUserDto.email })) {
    const createdUser = this.userRepository.create({ ...createUserDto, birthday: new Date(createUserDto.birthday).getTime() });
    //   const { password, ...user } = await this.userRepository.save(createdUser)
    //   return user as User;
    // } else {
    //   return
    // }

    try {
      const result = await lastValueFrom(
        this.httpService.post(`http://${process.env.AUTH_HOST ?? 'localhost'}:8000/register`, createdUser)
      )

      if (result.status >= 200 && result.status < 400) {
        return result.data
      } else {
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e.message)
        return
      }
    }
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({

    });
  }

  async findAllStudents(): Promise<User[]> {
    return this.userRepository.find({
      where: {
        role: Role.STUDENT
      }
    })
  }

  async findOne(id: string): Promise<User | null> {
    if (id == null) {
      throw new NotFoundException(this.i18nService.translate('validation.notfound.user'))
    }
    return await this.userRepository.findOneBy({ id: id });
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User[]> {
    return
  }

  async removeUser(id: string): Promise<boolean> {
    await this.userRepository.softDelete({ id: id });
    return true;
  }
}
