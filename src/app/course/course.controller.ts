import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Query, ValidationPipe } from "@nestjs/common";
import { Course } from "./course.entity";
import { CourseService } from "./course.service";
import { CreateCourseDTO } from "./dto/create-course.dto";
import { GetCourseQuery } from "./dto/get-course.query";
import { UpdateCourseDTO } from "./dto/update-course.dto";

@Controller()
export class CourseController {

    constructor(private readonly courseService: CourseService) { }

    @Get("/courses")
    async getCourses(@Query() query: GetCourseQuery): Promise<Course[]> {
        return this.courseService.getCourses(query);
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