import { IsNumber, IsPositive, IsString, IsUrl, IsUUID, Min } from "class-validator";

export class CreateLessonBulkDTO {

    @IsString()
    title: string;

    @IsUrl()
    url: string;
}