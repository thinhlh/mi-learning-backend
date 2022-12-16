import { Controller, Get, Headers, Param, Post, Query } from "@nestjs/common";
import { StudentCourseService } from "./student_course.service";
import { Roles } from "src/config/guard/role.decorator";
import { Role } from "../role/role";
import { USER_KEY } from "src/config/guard/auth.guard";

@Controller()
export class StudentCourseController {
    constructor(private readonly studentCourseService: StudentCourseService) {

    }

    @Post("/purchase/:courseId")
    @Roles(Role.STUDENT)
    async enrollCourse(@Headers(USER_KEY) user: string, @Param('courseId') courseId: string) {
        return this.studentCourseService.purchaseCourse(user, courseId)
    }
}