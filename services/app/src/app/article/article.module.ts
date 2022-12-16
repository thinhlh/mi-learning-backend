import { Module, OnModuleInit } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryModule } from "../category/category.module";
import { CategoryService } from "../category/category.service";
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
    exports: [ArticleService]
})
export class ArticleModule implements OnModuleInit {
    constructor(
        private readonly articleService: ArticleService,
        private readonly categoryService: CategoryService
    ) { }
    async onModuleInit() {
        // this.articleService.createArticle({
        //     author: "Le Hoang Thinh",
        //     thumbnail: "https://avatars.githubusercontent.com/in/15368?s=64&v=4",
        //     title: "This is a new article",
        //     url: "https://www.hoangthinh.me",
        //     categoryId: (await this.categoryService.getCategoryByTitle("Flutter")).id,
        // })
    }

}