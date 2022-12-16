import { StudentCourseService } from "./student_course.service";
export declare class StudentCourseController {
    private readonly studentCourseService;
    constructor(studentCourseService: StudentCourseService);
    enrollCourse(user: string, courseId: string): Promise<boolean>;
}
