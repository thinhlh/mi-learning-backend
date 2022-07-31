import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeORMError } from "typeorm";
import { Category } from "../category/category.entity";
import { Course } from "../course/course.entity";
import { Lesson } from "../lesson/lesson.entity";
import { Schedule } from "../schedule/schedule.entity";
import { Section } from "../section/section.entity";
import { Student } from "../student/student.entity";
import { Teacher } from "../teacher/teacher.entity";
import { User } from "../user/user.entity";
import { ArticleController } from "./article.controller";
import { Article } from "./article.entity";
import { ArticleService } from "./article.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Article, Category, Lesson, Section, Course, Student, User, Teacher, Schedule])
    ],
    controllers: [ArticleController],
    providers: [ArticleService],
})
export class ArticleModule {

}