import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "../category/category.entity";
import { Article } from "./article.entity";
import { CreateArticleDTO } from "./dto/create-article.dto";
import { UpdateArticleDTO } from "./dto/update-article.dto";

export class ArticleService {
    constructor(
        @InjectRepository(Article) private readonly articleRepository: Repository<Article>,
        @InjectRepository(Category) private readonly categoryRepository: Repository<Category>
    ) { }

    async getArticles(): Promise<Article[]> {
        return this.articleRepository.find({
            relations: {
                category: true,
            }
        });
    }

    async createArticle(createArticleDTO: CreateArticleDTO): Promise<Article> {
        const article = this.articleRepository.create(createArticleDTO);

        const category = await this.preloadCategory(createArticleDTO.categoryId);

        if (category) {
            article.category = category;
        }

        return await this.articleRepository.save(article);

    }

    async updateArticle(id: string, updateArticleDTO: UpdateArticleDTO): Promise<Article> {
        const article = await this.articleRepository.preload({
            id: id,
            ...updateArticleDTO,
        });

        if (!article) {
            throw new NotFoundException();
        } else {
            return this.articleRepository.save(article);
        }
    }

    async deleteArticle(id: string): Promise<boolean> {
        const result = await this.articleRepository.softDelete({ id: id });
        return true;
    }

    private async preloadCategory(categoryId?: string): Promise<Category> {
        return await this.categoryRepository.preload({ id: categoryId })
    }

}