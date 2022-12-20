import { Body, Controller, Headers, Put } from "@nestjs/common";
import { updateLessonStatusDTO } from "./dto/update-lesson-status.dto";
import { StudentLessonService } from "./student_lesson.service";
import { Roles } from "src/config/guard/role.decorator";
import { Role } from "../role/role";
import { USER_KEY } from "src/config/guard/auth.guard";

@Controller()
export class StudentLessonController {
    constructor(private readonly studentLessonService: StudentLessonService) {

    }

    @Put("lesson/status")
    @Roles(Role.STUDENT)
    async updateLessonStatus(@Headers(USER_KEY) user: string, @Body() updateLessonStatusDTO: updateLessonStatusDTO) {
        return this.studentLessonService.updateFinishStatus(user, updateLessonStatusDTO);
    }
}