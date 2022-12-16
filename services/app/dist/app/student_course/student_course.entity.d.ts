import { Course } from "../course/course.entity";
import { Rating } from "../rating/rating.entity";
import { Student } from "../student/student.entity";
export declare class StudentCourse {
    studentId: string;
    courseId: string;
    saved: boolean;
    enrolled: boolean;
    student: Student;
    course: Course;
    ratings: Rating[];
}
