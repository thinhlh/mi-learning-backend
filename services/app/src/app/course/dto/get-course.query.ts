import { ApiQuery, OmitType } from "@nestjs/swagger"
import { Expose } from "class-transformer"
import { IsBoolean, IsEnum, IsOptional } from "class-validator"

export enum GetCoursesType {
    FOR_YOU = 'FOR_YOU',
    ME = 'ME'
}

export class GetCoursesQuery {

    @IsBoolean()
    @IsOptional()
    loadSections?: boolean

    @IsBoolean()
    @IsOptional()
    loadLessons?: boolean

    // @IsEnum(GetCoursesType)
    type: GetCoursesType
}