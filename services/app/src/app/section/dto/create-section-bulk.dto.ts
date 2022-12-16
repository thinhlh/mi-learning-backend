import { IsArray, IsObject, IsString } from "class-validator";
import { CreateLessonBulkDTO } from "src/app/lesson/dto/create-lesson-bulk.dto";

export class CreateSectionBulkDTO {
    @IsString()
    title: string

    @IsArray()
    lessons?: (string | CreateLessonBulkDTO)[]
}