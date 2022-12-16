import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Teacher } from "./teacher.entity";
import { Repository } from "typeorm";

@Injectable()
export class TeacherService {
    constructor(@InjectRepository(Teacher) private readonly teacherRepository: Repository<Teacher>) { }

    async getTeacherByEmail(email: string): Promise<Teacher> {
        return this.teacherRepository.findOneBy({ user: { email: email } });
    }
}
