import { Category } from "./category.entity";
import { CategoryService } from "./category.service";
import { CreateCategoryDTO } from "./dto/create-category.dto";
import { UpdateCategoryDTO } from "./dto/update-category.dto";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getCategories(): Promise<Category[]>;
    createCategory(createCategoryDTO: CreateCategoryDTO): Promise<Category>;
    updateArticle(id: string, updateCategoryDTO: UpdateCategoryDTO): Promise<Category>;
    deleteCategory(id: string): Promise<any>;
    restoreDeletedCategory(id: string): Promise<any>;
}
