import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "../category/category.entity";
import { CategoryModule } from "../category/category.module";
import { CategoryService } from "../category/category.service";
import { Lesson } from "../lesson/lesson.entity";
import { Schedule } from "../schedule/schedule.entity";
import { Section } from "../section/section.entity";
import { SectionModule } from "../section/section.module";
import { Student } from "../student/student.entity";
import { Teacher } from "../teacher/teacher.entity";
import { User } from "../user/user.entity";
import { CourseController } from "./course.controller";
import { Course } from "./course.entity";
import { CourseService } from "./course.service";
import { TeacherModule } from "../teacher/teacher.module";
import { StudentCourseModule } from "../student_course/student_course.module";
import { NoteService } from "../note/note.service";
import { NoteModule } from "../note/note.module";
import { StudentLesson } from "../student_lesson/student_lesson.entity";
import { StudentLessonModule } from "../student_lesson/student_lesson.module";

@Module({
    providers: [CourseService],
    controllers: [CourseController],
    imports: [TypeOrmModule.forFeature([Course, Section, Lesson]), CategoryModule, TeacherModule, StudentCourseModule, NoteModule, StudentLessonModule],
    exports: [CourseService],
})
export class CourseModule {

}