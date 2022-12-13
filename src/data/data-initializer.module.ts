import { Module, OnModuleInit } from "@nestjs/common";
import { ArticleModule } from "src/app/article/article.module";
import { ArticleService } from "src/app/article/article.service";
import { Category } from "src/app/category/category.entity";
import { CategoryModule } from "src/app/category/category.module";
import { CategoryService } from "src/app/category/category.service";
import { CourseModule } from "src/app/course/course.module";
import { CourseService } from "src/app/course/course.service";
import * as CATEGORIES_JSON from "src/data/categories.json";
import * as ARTICLES_JSON from "src/data/articles.json";
import * as COURSES_JSON from "src/data/courses.json";
import { I18n, I18nContext, I18nModule } from "nestjs-i18n";
import { CreateCourseBulkDTO } from "src/app/course/dto/create-course-bulk.dto";

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
        const categories = await this.createCategories();
        const articles = await this.createArticles();
        const courses = await this.createCourses();
    }

    private async createCategories() {
        return await this.categoryService.createCategories(
            CATEGORIES_JSON
        )
    }

    private async createArticles() {
        return await this.articleService.createArticles(ARTICLES_JSON)
    }

    private async createCourses() {
        for (const createCourseBulkDTO of COURSES_JSON) {
            await this.courseService.createCourseBulk(createCourseBulkDTO);
        }
    }
}