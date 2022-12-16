import { Course } from "../course/course.entity";
import { User } from "../user/user.entity";
export declare class Teacher {
    id: string;
    user: User;
    courses: Course[];
}
