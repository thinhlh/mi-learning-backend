import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryModule } from "../category/category.module";
import { ArticleController } from "./article.controller";
import { Article } from "./article.entity";
import { ArticleService } from "./article.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Article]),
        CategoryModule,
    ],
    controllers: [ArticleController],
    providers: [ArticleService],
})
export class ArticleModule {

}