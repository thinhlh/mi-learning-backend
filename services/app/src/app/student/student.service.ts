import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Student } from "./student.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class StudentService {
    constructor(@InjectRepository(Student) private readonly studentRepository: Repository<Student>) {

    }

    async getEnrolledCourse(studentId: string) {

    }
}