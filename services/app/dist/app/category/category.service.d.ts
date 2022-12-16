import { Repository } from "typeorm";
import { Category } from "./category.entity";
import { CreateCategoryDTO } from "./dto/create-category.dto";
import { UpdateCategoryDTO } from "./dto/update-category.dto";
export declare class CategoryService {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    getCategories(): Promise<Category[]>;
    getOrCreateCategory(category: CreateCategoryDTO | string): Promise<Category>;
    getCategoryByTitle(title?: string): Promise<Category>;
    createCategory(createCategoryDTO: CreateCategoryDTO): Promise<Category>;
    createCategories(createCategoryDTOs: CreateCategoryDTO[]): Promise<Category[]>;
    updateCategory(id: string, updateCategoryDTO: UpdateCategoryDTO): Promise<Category>;
    deleteCategory(id: string): Promise<any>;
    restoreDeletedCategory(id: string): Promise<any>;
}
