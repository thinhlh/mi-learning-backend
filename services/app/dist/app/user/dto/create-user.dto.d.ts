import { Role } from "src/app/role/role";
export declare class CreateUserDto {
    name: string;
    password: string;
    email: string;
    occupation: string;
    birthday: number;
    avatar: string;
    role: Role;
}
