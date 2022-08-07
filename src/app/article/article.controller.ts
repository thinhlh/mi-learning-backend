import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UseInterceptors } from "@nestjs/common";
import { Article } from "./article.entity";
import { ArticleService } from "./article.service";
import { CreateArticleDTO } from "./dto/create-article.dto";
import { UpdateArticleDTO } from "./dto/update-article.dto";

@Controller()
export class ArticleController {

    constructor(private readonly articleService: ArticleService) { }

    @Get("/articles")
    async getArticles(): Promise<Article[]> {
        return this.articleService.getArticles();
    }

    @Post("/article")
    async createArticle(@Body() createArticleDTO: CreateArticleDTO): Promise<Article> {
        return this.articleService.createArticle(createArticleDTO);
    }

    @Patch("/article/:id")
    async updateArticle(@Body() updateArticleDTO: UpdateArticleDTO, @Param('id', ParseUUIDPipe) id: string): Promise<Article> {
        return this.articleService.updateArticle(id, updateArticleDTO);
    }

    @Delete('/article/:id')
    async deleteArticle(@Param('id') id: string): Promise<boolean> {
        return this.articleService.deleteArticle(id);
    }

}

