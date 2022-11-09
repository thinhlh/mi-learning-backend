import { Expose } from "class-transformer"
import { IsBoolean, IsOptional } from "class-validator"

export class GetCourseQuery {

    @IsBoolean()
    @IsOptional()
    loadSections?: boolean

    @IsBoolean()
    @IsOptional()
    loadLessons?: boolean
}