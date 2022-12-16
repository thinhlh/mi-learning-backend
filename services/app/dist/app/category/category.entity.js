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
exports.Category = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const article_entity_1 = require("../article/article.entity");
const course_entity_1 = require("../course/course.entity");
let Category = class Category {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, title: { required: true, type: () => String }, background: { required: true, type: () => String }, deletedAt: { required: true, type: () => Date }, courses: { required: true, type: () => [require("../course/course.entity").Course] }, articles: { required: true, type: () => [require("../article/article.entity").Article] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Category.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Category.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Category.prototype, "background", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({}),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Date)
], Category.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => course_entity_1.Course, course => course.category),
    __metadata("design:type", Array)
], Category.prototype, "courses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => article_entity_1.Article, article => article.category),
    __metadata("design:type", Array)
], Category.prototype, "articles", void 0);
Category = __decorate([
    (0, typeorm_1.Entity)()
], Category);
exports.Category = Category;
//# sourceMappingURL=category.entity.js.map