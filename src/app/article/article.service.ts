import { ConsoleLogger, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { I18nService } from "nestjs-i18n";
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
        for (const createArticleDTO of createArticleDTOs) {
            articles.push(await this.createArticle(createArticleDTO))
        }
        return articles
    }

    async createArticle(createArticleDTO: CreateArticleDTO): Promise<Article> {
        const article = this.articleRepository.create(createArticleDTO);

        if (createArticleDTO.categoryTitle != null) {
            const category = await this.preloadCategory(createArticleDTO.categoryTitle);
            if (category) {
                article.category = category;
            } else {
                return
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

    private async preloadCategory(categoryTitle?: string): Promise<Category> {
        const category = await this.categoryService.getCategoryByTitle(categoryTitle)
        return category
    }

}