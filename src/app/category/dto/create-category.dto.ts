import { IsString, IsUrl } from "class-validator";

export class CreateCategoryDTO {

    @IsString()
    readonly title: string;

    @IsUrl()
    readonly background: string;
}
