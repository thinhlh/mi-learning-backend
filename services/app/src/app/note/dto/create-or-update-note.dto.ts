import { IsOptional, IsUUID, Min } from "class-validator";
import internal from "stream";

export class CreateOrUpdateNoteDTO {
    content: string;

    @IsUUID()
    lessonId: string;

    @Min(0)
    createdAt: number;

    @IsOptional()
    @IsUUID()
    id?: string;
}