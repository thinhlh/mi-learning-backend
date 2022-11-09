import { Controller } from "@nestjs/common";
import { StudentCourseService } from "./student_course.service";

@Controller()
export class StudentCourseController {
    constructor(private readonly studentCourseService: StudentCourseService) { }
}