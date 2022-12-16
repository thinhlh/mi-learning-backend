import { OnModuleInit } from "@nestjs/common";
import { ArticleService } from "src/app/article/article.service";
import { CategoryService } from "src/app/category/category.service";
import { CourseService } from "src/app/course/course.service";
import { UserService } from "src/app/user/user.service";
export declare class DataInitializerModule implements OnModuleInit {
    private readonly articleService;
    private readonly categoryService;
    private readonly courseService;
    private readonly userService;
    constructor(articleService: ArticleService, categoryService: CategoryService, courseService: CourseService, userService: UserService);
    onModuleInit(): Promise<void>;
    private createCategories;
    private createArticles;
    private createCourses;
    private createUsers;
}
