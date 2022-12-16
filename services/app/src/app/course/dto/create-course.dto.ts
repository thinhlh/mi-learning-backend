import { IsArray, IsCurrency, IsDecimal, IsEmail, IsNumber, IsOptional, IsPositive, IsString, IsUrl, IsUUID, Min } from "class-validator";

export class CreateCourseDTO {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsPositive()
    length: number;

    @IsUrl()
    background: string;

    @IsUrl()
    @IsOptional()
    icon: string;

    @IsNumber()
    @Min(0)
    price: number;

    @IsArray()
    sections: string[];

    @IsEmail()
    @IsOptional()
    teacherEmail: string;

    @IsUUID()
    categoryId: string;
}