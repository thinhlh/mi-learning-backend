import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeORMError } from "typeorm";
import { Category } from "../category/category.entity";
import { Course } from "../course/course.entity";
import { Lesson } from "../lesson/lesson.entity";
import { Section } from "../section/section.entity";
import { Student } from "../student/student.entity";
import { Teacher } from "../teacher/teacher.entity";
import { User } from "../user/user.entity";
import { Article } from "./article.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Article, Category, Lesson, Section, Course, Student, User, Teacher,])
    ]
})
export class ArticleModule {

}