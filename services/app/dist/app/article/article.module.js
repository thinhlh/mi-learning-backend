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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_module_1 = require("../category/category.module");
const category_service_1 = require("../category/category.service");
const article_controller_1 = require("./article.controller");
const article_entity_1 = require("./article.entity");
const article_service_1 = require("./article.service");
let ArticleModule = class ArticleModule {
    constructor(articleService, categoryService) {
        this.articleService = articleService;
        this.categoryService = categoryService;
    }
    async onModuleInit() {
    }
};
ArticleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([article_entity_1.Article]),
            category_module_1.CategoryModule,
        ],
        controllers: [article_controller_1.ArticleController],
        providers: [article_service_1.ArticleService],
        exports: [article_service_1.ArticleService]
    }),
    __metadata("design:paramtypes", [article_service_1.ArticleService,
        category_service_1.CategoryService])
], ArticleModule);
exports.ArticleModule = ArticleModule;
//# sourceMappingURL=article.module.js.map