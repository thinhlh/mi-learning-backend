import { IsEmpty, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateArticleDTO {

    @IsString()
    @IsNotEmpty()
    readonly author: string;

    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    readonly thumbnail: string;

    @IsString()
    @IsNotEmpty()
    readonly url: string;

    @IsUUID()
    @IsOptional()
    readonly categoryId?: string;
}