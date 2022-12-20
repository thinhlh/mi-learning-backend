import { IsOptional, IsString, IsUUID, Min } from "class-validator";
import internal from "stream";

export class CreateOrUpdateNoteDTO {
    @IsUUID()
    lessonId: string;

    @Min(0)
    createdAt: number;

    @IsString()
    content: string;

    @IsOptional()
    @IsUUID()
    id?: string;
}