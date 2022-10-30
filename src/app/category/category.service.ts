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

    async getCategory(id?: string) {
        if (id == null) return
        return this.categoryRepository.findOneBy({ id: id });
    }

    async createCategory(createCategoryDTO: CreateCategoryDTO): Promise<Category> {

        const category = this.categoryRepository.create(createCategoryDTO);

        return this.categoryRepository.save(category);
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