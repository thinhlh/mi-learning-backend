import { Module, OnModuleInit } from "@nestjs/common";
import { ArticleModule } from "src/app/article/article.module";
import { ArticleService } from "src/app/article/article.service";
import { Category } from "src/app/category/category.entity";
import { CategoryModule } from "src/app/category/category.module";
import { CategoryService } from "src/app/category/category.service";
import { CourseModule } from "src/app/course/course.module";
import { CourseService } from "src/app/course/course.service";
import * as CATEGORIES_JSON from "src/data/categories.json";

@Module({
    imports: [ArticleModule, CourseModule, CategoryModule]
})
export class DataInitializerModule implements OnModuleInit {
    constructor(
        private readonly articleService: ArticleService,
        private readonly categoryService: CategoryService,
        private readonly courseService: CourseService,
    ) { }
    async onModuleInit() {
        // const categories = await this.createCategories();
        // const articles = await this.createArticles(categories);
    }

    private async createCategories() {
        return await this.categoryService.createCategories(
            CATEGORIES_JSON
        )
    }

    private async createArticles(categories: Category[]) {

    }
}