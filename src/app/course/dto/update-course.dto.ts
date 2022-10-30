import { PartialType } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { CreateCourseDTO } from "./create-course.dto";

export class UpdateCourseDTO extends PartialType(CreateCourseDTO) {
    @IsUUID("all", {
        each: true,
    })
    sections: string[];
}