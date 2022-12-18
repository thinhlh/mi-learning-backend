import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RatingController } from "./rating.controller";
import { Rating } from "./rating.entity";
import { RatingService } from "./rating.service";
import { StudentCourse } from "../student_course/student_course.entity";
import { StudentCourseModule } from "../student_course/student_course.module";

@Module({
    imports: [TypeOrmModule.forFeature([Rating, StudentCourse]), StudentCourseModule],
    controllers: [RatingController],
    providers: [RatingService],
    exports: [RatingService]
})
export class RatingModule {

}