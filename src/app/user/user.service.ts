import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../role/role';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

export type KeyOfUser = Array<keyof User>;

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {
  }
  async createUser(createUserDto: CreateUserDto): Promise<User> {

    if (! await this.userRepository.findOneBy({ email: createUserDto.email })) {
      const createdUser = this.userRepository.create({ ...createUserDto, birthday: new Date(createUserDto.birthday) });
      const { password, ...user } = await this.userRepository.save(createdUser)
      return user as User;
    } else {
      return
    }

  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({

    });
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOneBy({ id: id });
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User[]> {
    return
  }

  async removeUser(id: string): Promise<boolean> {
    await this.userRepository.softDelete({ id: id });
    return true;
  }
}
