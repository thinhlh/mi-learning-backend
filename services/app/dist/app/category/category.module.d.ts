import { OnModuleInit } from "@nestjs/common";
import { CategoryService } from "./category.service";
export declare class CategoryModule implements OnModuleInit {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    onModuleInit(): Promise<void>;
}
