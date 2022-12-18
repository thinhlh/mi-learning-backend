import { IsInt, IsUUID, Max, Min } from "class-validator";

export class CreateRatingDTO {

    @IsUUID()
    studentId: string;

    @IsUUID()
    courseId: string;

    @Min(1)
    @Max(5)
    @IsInt()
    value: number;

    content: string;
}
