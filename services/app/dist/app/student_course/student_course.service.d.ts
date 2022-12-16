import { Repository } from "typeorm";
import { StudentCourse } from "./student_course.entity";
export declare class StudentCourseService {
    private readonly studentCourseRepository;
    constructor(studentCourseRepository: Repository<StudentCourse>);
}
