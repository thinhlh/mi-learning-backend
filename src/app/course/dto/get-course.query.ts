import { ApiQuery } from "@nestjs/swagger"
import { Expose } from "class-transformer"
import { IsBoolean, IsEnum, IsOptional } from "class-validator"

export enum GetCourseType {
    FOR_YOU = 'FOR_YOU',
    ME = 'ME'
}

export class GetCourseQuery {

    @IsBoolean()
    @IsOptional()
    loadSections?: boolean

    @IsBoolean()
    @IsOptional()
    loadLessons?: boolean

    @IsEnum(GetCourseType)
    type: GetCourseType
}