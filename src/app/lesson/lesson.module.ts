import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CourseModule } from "../course/course.module";
import { SectionModule } from "../section/section.module";
import { SectionService } from "../section/section.service";
import { LessonController } from "./lesson.controller";
import { Lesson } from "./lesson.entity";
import { LessonService } from "./lesson.service";

@Module({
    imports: [TypeOrmModule.forFeature([Lesson]), SectionModule, CourseModule],
    providers: [LessonService],
    controllers: [LessonController]
})
export class LessonModule { }