import { PartialType, OmitType } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { IsArray, IsUUID } from "class-validator";
import { CreateSectionDTO } from "src/app/section/dto/create-section.dto";
import { UpdateSectionDTO } from "src/app/section/dto/update-section.dto";
import { CreateCourseDTO } from "./create-course.dto";

export class UpdateCourseDTO extends PartialType(CreateCourseDTO) {
    @IsArray()
    sections: string[];
}