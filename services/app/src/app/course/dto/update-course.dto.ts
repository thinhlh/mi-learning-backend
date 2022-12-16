import { PartialType, OmitType } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { IsArray, IsUUID } from "class-validator";
import { CreateCourseDTO } from "./create-course.dto";

export class UpdateCourseDTO extends PartialType(CreateCourseDTO) {
    @IsArray()
    sections: string[];
}