import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "../category/category.entity";
import { CategoryModule } from "../category/category.module";
import { CategoryService } from "../category/category.service";
import { Lesson } from "../lesson/lesson.entity";
import { Schedule } from "../schedule/schedule.entity";
import { Section } from "../section/section.entity";
import { Student } from "../student/student.entity";
import { Teacher } from "../teacher/teacher.entity";
import { User } from "../user/user.entity";
import { CourseController } from "./course.controller";
import { Course } from "./course.entity";
import { CourseService } from "./course.service";

@Module({
    providers: [CourseService],
    controllers: [CourseController],
    imports: [TypeOrmModule.forFeature([Course, Section, Lesson, Teacher, User, Student, Schedule]), CategoryModule],
    exports: [CourseService],
})
export class CourseModule {

}