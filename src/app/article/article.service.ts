import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Article } from "./article.entity";
import { CreateArticleDTO } from "./dto/create-article.dto";

export class ArticleService {
    constructor(
        @InjectRepository(Article) private readonly articleRepository: Repository<Article>
    ) { }

    async getArticles(): Promise<Article[]> {
        return this.articleRepository.find();
    }

    async createArticle(createArticleDTO: CreateArticleDTO): Promise<Article> {
        return this.articleRepository.create(createArticleDTO)
    }
}