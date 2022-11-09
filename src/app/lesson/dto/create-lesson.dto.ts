import { IsNumber, IsPositive, IsString, IsUrl, IsUUID, Min } from "class-validator";

export class CreateLessonDTO {

    @IsUUID()
    sectionId: string

    @IsString()
    title: string;

    @IsNumber()
    @Min(0)
    lessonOrder: number;

    @IsUrl()
    url: string;

}