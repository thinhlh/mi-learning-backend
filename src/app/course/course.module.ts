import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "../category/category.entity";
import { Section } from "../section/section.entity";
import { CourseController } from "./course.controller";
import { Course } from "./course.entity";
import { CourseService } from "./course.service";

@Module({
    providers: [CourseService],
    controllers: [CourseController],
    imports: [TypeOrmModule.forFeature([Course, Category, Section])]
})
export class CourseModule {

}