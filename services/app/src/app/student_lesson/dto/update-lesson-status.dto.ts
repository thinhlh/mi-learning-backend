import { IsBoolean, IsUUID } from "class-validator";

export class updateLessonStatusDTO {
    @IsUUID()
    lessonId: string

    @IsBoolean()
    finished: boolean
}