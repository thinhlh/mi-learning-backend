import { IsCurrency, IsDecimal, IsNumber, IsOptional, IsPositive, IsString, IsUUID, Min } from "class-validator";

export class CreateCourseDTO {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsPositive()
    length: number;

    @IsString()
    background: string;

    @IsString()
    @IsOptional()
    icon: string;

    @IsNumber()
    @Min(0)
    price: number;

    @IsUUID()
    @IsOptional()
    teacherId: string;

    @IsUUID()
    categoryId: string;
}