import { ApiQuery, OmitType } from "@nestjs/swagger"
import { Expose } from "class-transformer"
import { IsBoolean, IsEnum, IsOptional, IsString, IsUUID } from "class-validator"

export enum GetCoursesType {
    FOR_YOU = 'FOR_YOU', // three course user have not joined
    ME = 'ME', // All course user joined
    ALL = 'ALL', // All course user have not joined
    SAVED = 'SAVED' // Course user saved
}

export class GetCoursesQuery {

    @IsBoolean()
    @IsOptional()
    loadSections?: boolean

    @IsBoolean()
    @IsOptional()
    loadLessons?: boolean

    @IsEnum(GetCoursesType)
    @IsOptional()
    type: GetCoursesType

    @IsUUID()
    @IsOptional()
    categoryId: string
}