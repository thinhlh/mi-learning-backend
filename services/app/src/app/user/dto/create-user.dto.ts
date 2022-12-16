import { Transform, Type } from "class-transformer";
import { Role } from "src/app/role/role";

export class CreateUserDto {
    name: string;
    password: string;
    email: string;
    occupation: string;
    birthday: number;
    avatar: string;
    role: Role;
}
