import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentLesson } from "./student_lesson.entity";
import { StudentLessonController } from "./student_lesson.controller";
import { StudentLessonService } from "./student_lesson.service";

@Module({
    imports: [TypeOrmModule.forFeature([StudentLesson])],
    controllers: [StudentLessonController],
    providers: [StudentLessonService],
    exports: [StudentLessonService]

})
export class StudentLessonModule {

}