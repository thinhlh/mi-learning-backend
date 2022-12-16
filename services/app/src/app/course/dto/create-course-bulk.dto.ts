import { IsArray, IsNumber, IsObject, IsOptional, IsPositive, IsString, IsUrl, IsUUID, Min } from "class-validator/types/decorator/decorators";
import { CreateCategoryDTO } from "src/app/category/dto/create-category.dto";
import { CreateSectionBulkDTO } from "src/app/section/dto/create-section-bulk.dto";

export class CreateCourseBulkDTO {

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
    sections?: (string | CreateSectionBulkDTO)[] = [];

    @IsUUID()
    @IsOptional()
    teacherId: string;

    category: string | CreateCategoryDTO;
}