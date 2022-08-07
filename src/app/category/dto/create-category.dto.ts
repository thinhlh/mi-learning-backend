import { IsString } from "class-validator";

export class CreateCategoryDTO {

    @IsString()
    readonly title: string;

    @IsString()
    readonly background: string;

}
