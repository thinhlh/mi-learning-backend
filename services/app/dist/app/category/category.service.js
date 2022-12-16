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
exports.CategoryService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("./category.entity");
let CategoryService = class CategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async getCategories() {
        return this.categoryRepository.find({});
    }
    async getOrCreateCategory(category) {
        let result;
        if (typeof category === "string") {
            result = await this.categoryRepository.findOneBy({ id: category });
        }
        else {
            result = await this.categoryRepository.findOneBy({ title: category.title });
        }
        if (result == null) {
            const createdCategory = this.categoryRepository.create(Object.assign({}, category));
            result = await this.categoryRepository.save(createdCategory);
        }
        return result;
    }
    async getCategoryByTitle(title) {
        if (title == null)
            return;
        return await this.categoryRepository.findOneBy({ title: title });
    }
    async createCategory(createCategoryDTO) {
        const category = this.categoryRepository.create(createCategoryDTO);
        return this.categoryRepository.save(category);
    }
    async createCategories(createCategoryDTOs) {
        const categories = [];
        for (const createCategoryDTO of createCategoryDTOs) {
            const exists = await this.categoryRepository.findOne({ where: { title: createCategoryDTO.title } });
            if (!exists) {
                const category = await this.categoryRepository.save(this.categoryRepository.create(Object.assign({}, createCategoryDTO)));
                categories.push(category);
            }
        }
        return categories;
    }
    async updateCategory(id, updateCategoryDTO) {
        const category = await this.categoryRepository.preload(Object.assign({ id: id }, updateCategoryDTO));
        if (category) {
            return this.categoryRepository.save(category);
        }
    }
    async deleteCategory(id) {
        await this.categoryRepository.softDelete({ id: id });
        return null;
    }
    async restoreDeletedCategory(id) {
        await this.categoryRepository.restore({ id: id });
        return null;
    }
};
CategoryService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map