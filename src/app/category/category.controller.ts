import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from "@nestjs/common";
import { Category } from "./category.entity";
import { CategoryService } from "./category.service";
import { CreateCategoryDTO } from "./dto/create-category.dto";
import { UpdateCategoryDTO } from "./dto/update-category.dto";

@Controller()
export class CategoryController {

    constructor(private readonly categoryService: CategoryService) { }

    @Get("/categories")
    async getCategories(): Promise<Category[]> {
        return this.categoryService.getCategories();
    }

    @Post("/category")
    async createCategory(@Body() createCategoryDTO: CreateCategoryDTO): Promise<Category> {
        return this.categoryService.createCategory(createCategoryDTO)
    }

    @Patch("/category/:id")
    async updateArticle(@Param('id', ParseUUIDPipe) id: string, @Body() updateCategoryDTO: UpdateCategoryDTO): Promise<Category> {
        return this.categoryService.updateCategory(id, updateCategoryDTO)
    }

    @Delete("/category/:id")
    async deleteCategory(@Param('id', ParseUUIDPipe) id: string): Promise<any> {
        return this.categoryService.deleteCategory(id)
    }

    @Post("/category/restore/:id")
    async restoreDeletedCategory(@Param('id', ParseUUIDPipe) id: string): Promise<any> {
        return this.categoryService.restoreDeletedCategory(id)
    }

}