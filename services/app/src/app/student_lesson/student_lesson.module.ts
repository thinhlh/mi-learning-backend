import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentLesson } from "./student_lesson.entity";

@Module({
    imports: [TypeOrmModule.forFeature([StudentLesson])],

})
export class StudentLessonModule {

}