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
exports.ArticleController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const article_service_1 = require("./article.service");
const create_article_dto_1 = require("./dto/create-article.dto");
const update_article_dto_1 = require("./dto/update-article.dto");
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async getArticles() {
        return this.articleService.getArticles();
    }
    async createArticle(createArticleDTO) {
        return this.articleService.createArticle(createArticleDTO);
    }
    async updateArticle(updateArticleDTO, id) {
        return this.articleService.updateArticle(id, updateArticleDTO);
    }
    async deleteArticle(id) {
        return this.articleService.deleteArticle(id);
    }
    async restoreDeletedArticle(id) {
        return this.articleService.restoreDeletedArticle(id);
    }
};
__decorate([
    (0, common_1.Get)("/articles"),
    openapi.ApiResponse({ status: 200, type: [require("./article.entity").Article] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getArticles", null);
__decorate([
    (0, common_1.Post)("/article"),
    openapi.ApiResponse({ status: 201, type: require("./article.entity").Article }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_article_dto_1.CreateArticleDTO]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "createArticle", null);
__decorate([
    (0, common_1.Patch)("/article/:id"),
    openapi.ApiResponse({ status: 200, type: require("./article.entity").Article }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_article_dto_1.UpdateArticleDTO, String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "updateArticle", null);
__decorate([
    (0, common_1.Delete)('/article/:id'),
    openapi.ApiResponse({ status: 200, type: Boolean }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "deleteArticle", null);
__decorate([
    (0, common_1.Post)("/article/restore/:id"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "restoreDeletedArticle", null);
ArticleController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
exports.ArticleController = ArticleController;
//# sourceMappingURL=article.controller.js.map