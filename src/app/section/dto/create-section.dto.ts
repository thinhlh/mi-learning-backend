import { IsCurrency, IsDecimal, IsOptional, IsPositive, IsString, IsUUID } from "class-validator";

export class CreateSectionDTO {
    @IsString()
    title: string;

    @IsString()
    courseId: string;
}