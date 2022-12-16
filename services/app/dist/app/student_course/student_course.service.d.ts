import { Repository } from "typeorm";
import { StudentCourse } from "./student_course.entity";
import { I18nService } from "nestjs-i18n";
export declare class StudentCourseService {
    private readonly studentCourseRepository;
    private readonly i18nService;
    constructor(studentCourseRepository: Repository<StudentCourse>, i18nService: I18nService);
    purchaseCourse(studentId: string, courseId: string): Promise<boolean>;
}
