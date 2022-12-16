import { Role } from "../role/role";
import { Student } from "../student/student.entity";
import { Teacher } from "../teacher/teacher.entity";
export declare class User {
    id: string;
    name: string;
    password: string;
    email: string;
    occupation: string;
    birthday: Date;
    avatar: string;
    deletedAt: Date;
    role: Role;
    teacher: Teacher;
    student: Student;
}
