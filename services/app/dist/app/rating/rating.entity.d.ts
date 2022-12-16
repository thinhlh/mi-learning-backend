import { StudentCourse } from "../student_course/student_course.entity";
export declare class Rating {
    id: string;
    content: string;
    value: number;
    studentCourse: StudentCourse;
}
