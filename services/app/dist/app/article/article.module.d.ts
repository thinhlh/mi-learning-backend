import { OnModuleInit } from "@nestjs/common";
import { CategoryService } from "../category/category.service";
import { ArticleService } from "./article.service";
export declare class ArticleModule implements OnModuleInit {
    private readonly articleService;
    private readonly categoryService;
    constructor(articleService: ArticleService, categoryService: CategoryService);
    onModuleInit(): Promise<void>;
}
