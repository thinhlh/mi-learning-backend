import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "./category.entity";
import { CreateCategoryDTO } from "./dto/create-category.dto";
import { UpdateCategoryDTO } from "./dto/update-category.dto";

export class CategoryService {
    constructor(
        @InjectRepository(Category) private readonly categoryRepository: Repository<Category>
    ) {

    }

    async getCategories(): Promise<Category[]> {
        return this.categoryRepository.find({});
    }

    async getCategory(id?: string): Promise<Category> {
        if (id == null) return
        return this.categoryRepository.findOneBy({ id: id });
    }

    async getCategoryByTitle(title?: string): Promise<Category> {
        if (title == null) return
        return this.categoryRepository.findOneBy({ title: title });
    }

    async createCategory(createCategoryDTO: CreateCategoryDTO): Promise<Category> {

        const category = this.categoryRepository.create(createCategoryDTO);

        return this.categoryRepository.save(category);
    }

    async createCategories(createCategoryDTOs: CreateCategoryDTO[]): Promise<Category[]> {
        createCategoryDTOs.forEach(async createCategoryDTO => {
            const exists = await this.categoryRepository.findOne({ where: { title: createCategoryDTO.title } })
            if (!exists) {
                this.categoryRepository.save(this.categoryRepository.create({ ...createCategoryDTO }))
            }
        })
        return
    }

    async updateCategory(id: string, updateCategoryDTO: UpdateCategoryDTO): Promise<Category> {
        const category = await this.categoryRepository.preload({
            id: id,
            ...updateCategoryDTO
        })

        if (category) {
            return this.categoryRepository.save(category);
        }
    }

    async deleteCategory(id: string): Promise<any> {
        await this.categoryRepository.softDelete({ id: id });
        return null;
    }

    async restoreDeletedCategory(id: string): Promise<any> {
        await this.categoryRepository.restore({ id: id })
        return null;
    }
}