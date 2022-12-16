import { Module, OnModuleInit } from "@nestjs/common";
import * as CATEGORIES_JSON from "src/data/categories.json";
import * as ARTICLES_JSON from "src/data/articles.json";
import * as COURSES_JSON from "src/data/courses.json";
import * as USERS_JSON from "src/data/users.json";
import { I18n, I18nContext, I18nModule } from "nestjs-i18n";
import { ArticleModule } from "src/app/article/article.module";
import { ArticleService } from "src/app/article/article.service";
import { CategoryModule } from "src/app/category/category.module";
import { CategoryService } from "src/app/category/category.service";
import { CourseModule } from "src/app/course/course.module";
import { CourseService } from "src/app/course/course.service";
import { Role } from "src/app/role/role";
import { UserModule } from "src/app/user/user.module";
import { UserService } from "src/app/user/user.service";

@Module({
    imports: [ArticleModule, CourseModule, CategoryModule, UserModule]
})
export class DataInitializerModule implements OnModuleInit {
    constructor(
        private readonly articleService: ArticleService,
        private readonly categoryService: CategoryService,
        private readonly courseService: CourseService,
        private readonly userService: UserService,
    ) { }
    async onModuleInit() {
        const categories = await this.createCategories();
        const articles = await this.createArticles();
        const courses = await this.createCourses();
        const users = await this.createUsers();
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

    private async createUsers() {
        for (const createUserDto of USERS_JSON) {
            await this.userService.createUser({ ...createUserDto, role: createUserDto.role as Role })
        }
    }
}