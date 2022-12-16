import { Body, Controller, Delete, Get, Headers, Param, ParseUUIDPipe, Patch, Post, Query, UseInterceptors } from "@nestjs/common";
import { Course } from "./course.entity";
import { CourseService } from "./course.service";
import { CreateCourseDTO } from "./dto/create-course.dto";
import { GetCoursesQuery } from "./dto/get-course.query";
import { UpdateCourseDTO } from "./dto/update-course.dto";
import { USER_KEY } from "src/config/guard/auth.guard";
import { Roles } from "src/config/guard/role.decorator";
import { Role } from "../role/role";
import { CourseResponseDTO } from "./dto/course-response.dto";
import { ResponseMapperInterceptor } from "src/config/interceptors/response-mapper.interceptor";

@Controller()
export class CourseController {

    constructor(private readonly courseService: CourseService) { }

    @Get("/courses")
    async getCourses(@Query() query: GetCoursesQuery): Promise<Course[]> {
        return this.courseService.getCourses(query);
    }

    @Get("/course/:id")
    @Roles(Role.STUDENT)
    async getCourseDetail(@Headers(USER_KEY) user: string, @Param('id') courseId: string): Promise<CourseResponseDTO> {
        return this.courseService.getCourse(user, courseId);
    }

    @Post("/course")
    async createCourse(@Body() createCourseDTO: CreateCourseDTO): Promise<Course> {
        return this.courseService.createCourse(createCourseDTO);
    }

    @Patch("/course/:id")
    async updateCourse(@Param('id', ParseUUIDPipe) id: string, @Body() updateCourseDTO: UpdateCourseDTO): Promise<Course> {
        return this.courseService.updateCourse(id, updateCourseDTO);
    }

    @Delete("/course/:id")
    async deleteCourse(@Param('id', ParseUUIDPipe) id: string): Promise<any> {
        return this.courseService.deleteCourse(id);
    }

    @Post("/course/restore/:id")
    async restoreDeletedCourse(@Param('id', ParseUUIDPipe) id: string): Promise<any> {
        return this.courseService.restoreDeletedCourse(id);
    }


}