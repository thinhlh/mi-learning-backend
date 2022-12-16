"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_service_1 = require("../category/category.service");
const article_entity_1 = require("./article.entity");
let ArticleService = class ArticleService {
    constructor(articleRepository, categoryService) {
        this.articleRepository = articleRepository;
        this.categoryService = categoryService;
    }
    async getArticles() {
        return this.articleRepository.find({
            relations: {
                category: true,
            }
        });
    }
    async createArticles(createArticleDTOs) {
        const articles = [];
        for (const createArticleDTO of createArticleDTOs) {
            articles.push(await this.createArticle(createArticleDTO));
        }
        return articles;
    }
    async createArticle(createArticleDTO) {
        const article = this.articleRepository.create(createArticleDTO);
        if (createArticleDTO.categoryTitle != null) {
            const category = await this.preloadCategory(createArticleDTO.categoryTitle);
            if (category) {
                article.category = category;
            }
            else {
                return;
            }
        }
        return await this.articleRepository.save(article);
    }
    async updateArticle(id, updateArticleDTO) {
        const article = await this.articleRepository.preload(Object.assign({ id: id }, updateArticleDTO));
        if (!article) {
            throw new common_1.NotFoundException();
        }
        else {
            return this.articleRepository.save(article);
        }
    }
    async deleteArticle(id) {
        const result = await this.articleRepository.softDelete({ id: id });
        return true;
    }
    async restoreDeletedArticle(id) {
        await this.articleRepository.restore({ id: id });
        return null;
    }
    async preloadCategory(categoryTitle) {
        const category = await this.categoryService.getCategoryByTitle(categoryTitle);
        return category;
    }
};
ArticleService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(article_entity_1.Article)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        category_service_1.CategoryService])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map