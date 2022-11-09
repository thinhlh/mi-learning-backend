import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { StudentCourse } from "./student_course.entity";

@Injectable()
export class StudentCourseService {
    constructor(@InjectRepository(StudentCourse) private readonly studentCourseRepository: Repository<StudentCourse>) {

    }
}