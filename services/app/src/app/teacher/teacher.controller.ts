import { Controller } from "@nestjs/common";
import { TeacherService } from "./teacher.service";

@Controller()
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) {

    }
}