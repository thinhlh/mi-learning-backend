import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsUUID } from "class-validator";
import { CreateArticleDTO } from "./create-article.dto";

export class UpdateArticleDTO extends PartialType(CreateArticleDTO) {


}