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
exports.Article = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const category_entity_1 = require("../category/category.entity");
let Article = class Article {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, title: { required: true, type: () => String }, author: { required: true, type: () => String }, thumbnail: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, deletedAt: { required: false, type: () => Date }, url: { required: true, type: () => String }, category: { required: true, type: () => require("../category/category.entity").Category } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Article.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Article.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Article.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Date)
], Article.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Date)
], Article.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Article.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, category => category.id, { cascade: true, nullable: false }),
    __metadata("design:type", category_entity_1.Category)
], Article.prototype, "category", void 0);
Article = __decorate([
    (0, typeorm_1.Entity)()
], Article);
exports.Article = Article;
//# sourceMappingURL=article.entity.js.map