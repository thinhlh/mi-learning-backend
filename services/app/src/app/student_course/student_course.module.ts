import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentCourse } from "./student_course.entity";

@Module({
    imports: [TypeOrmModule.forFeature([StudentCourse])]
})
export class StudentCourseModule {

}