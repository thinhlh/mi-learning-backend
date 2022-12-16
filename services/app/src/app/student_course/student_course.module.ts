import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentCourse } from "./student_course.entity";
import { StudentCourseController } from "./student_course.controller";
import { StudentCourseService } from "./student_course.service";

@Module({
    imports: [TypeOrmModule.forFeature([StudentCourse])],
    controllers: [StudentCourseController],
    providers: [StudentCourseService],
    exports: [StudentCourseService]
})
export class StudentCourseModule {

}