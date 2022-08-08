import { IsCurrency, IsDecimal, IsOptional, IsPositive, IsString, IsUUID } from "class-validator";

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

    @IsDecimal()
    price: number;

    @IsUUID()
    @IsOptional()
    teacherId: string;

    @IsUUID("all", {
        each: true,
    })
    sections: string[];

    @IsUUID()
    categoryId: string;
}