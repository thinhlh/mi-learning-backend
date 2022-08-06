import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, UseInterceptors } from "@nestjs/common";
import { OmitType, PickType } from "@nestjs/swagger";
import { classToPlain, Exclude, Expose, plainToClass, plainToInstance, TransformPlainToInstance } from "class-transformer";
import e from "express";
import { ResponseMapperInterceptor } from "src/config/interceptors/response-mapper.interceptor";
import { Article } from "./article.entity";
import { ArticleService } from "./article.service";
import { CreateArticleDTO } from "./dto/create-article.dto";
import { UpdateArticleDTO } from "./dto/update-article.dto";

@Controller()
export class ArticleController {

    constructor(private readonly articleService: ArticleService) { }

    @Get("/articles")
    // @UseInterceptors(new ResponseMapperInterceptor(Article))
    async getArticles(): Promise<Article[]> {
        return this.articleService.getArticles();
    }

    @Post("/article")
    async createArticle(@Body() createArticleDTO: CreateArticleDTO): Promise<Article> {
        return this.articleService.createArticle(createArticleDTO);
    }

    @Patch("/article/{id}")
    async updateArticle(@Body() updateArticleDTO: UpdateArticleDTO, @Param('id', ParseUUIDPipe) id: string) {

        return this.articleService.updateArticle(id, updateArticleDTO);

    }

}

