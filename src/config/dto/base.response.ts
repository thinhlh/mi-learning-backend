import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export interface BaseResponse<T> {
    success: boolean;
    message?: string;
    data?: T;
}