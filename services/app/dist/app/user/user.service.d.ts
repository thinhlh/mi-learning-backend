import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { HttpService } from '@nestjs/axios';
export declare type KeyOfUser = Array<keyof User>;
export declare class UserService {
    private readonly userRepository;
    private readonly httpService;
    constructor(userRepository: Repository<User>, httpService: HttpService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User[]>;
    removeUser(id: string): Promise<boolean>;
}
