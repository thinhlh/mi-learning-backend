import { Schedule } from "../schedule/schedule.entity";
import { StudentCourse } from "../student_course/student_course.entity";
import { User } from "../user/user.entity";
export declare class Student {
    id: string;
    user: User;
    schedules: Schedule[];
    studentCourses: StudentCourse[];
}
