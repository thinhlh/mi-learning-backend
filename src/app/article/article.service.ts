import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "../category/category.entity";
import { CategoryService } from "../category/category.service";
import { Article } from "./article.entity";
import { CreateArticleDTO } from "./dto/create-article.dto";
import { UpdateArticleDTO } from "./dto/update-article.dto";

export class ArticleService {
    constructor(
        @InjectRepository(Article) private readonly articleRepository: Repository<Article>,
        private readonly categoryService: CategoryService,
    ) { }

    async getArticles(): Promise<Article[]> {
        return this.articleRepository.find({
            relations: {
                category: true,
            }
        });
    }

    async createArticles(createArticleDTOs: CreateArticleDTO[]): Promise<Article[]> {
        const articles: Article[] = []
        createArticleDTOs.forEach(async createArticleDTO => {
            articles.push(await this.createArticle(createArticleDTO))
        });
        return articles
    }

    async createArticle(createArticleDTO: CreateArticleDTO): Promise<Article> {
        const article = this.articleRepository.create(createArticleDTO);

        if (createArticleDTO.categoryId != null) {
            const category = await this.preloadCategory(createArticleDTO.categoryId);
            if (category) {
                article.category = category;
            }
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

    async restoreDeletedArticle(id: string): Promise<any> {
        await this.articleRepository.restore({ id: id });
        return null;
    }

    private async preloadCategory(categoryId?: string): Promise<Category> {
        return this.categoryService.getCategory(categoryId)
    }

}