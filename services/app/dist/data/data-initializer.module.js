"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataInitializerModule = void 0;
const common_1 = require("@nestjs/common");
const CATEGORIES_JSON = require("./categories.json");
const ARTICLES_JSON = require("./articles.json");
const COURSES_JSON = require("./courses.json");
const USERS_JSON = require("./users.json");
const article_module_1 = require("../app/article/article.module");
const article_service_1 = require("../app/article/article.service");
const category_module_1 = require("../app/category/category.module");
const category_service_1 = require("../app/category/category.service");
const course_module_1 = require("../app/course/course.module");
const course_service_1 = require("../app/course/course.service");
const user_module_1 = require("../app/user/user.module");
const user_service_1 = require("../app/user/user.service");
let DataInitializerModule = class DataInitializerModule {
    constructor(articleService, categoryService, courseService, userService) {
        this.articleService = articleService;
        this.categoryService = categoryService;
        this.courseService = courseService;
        this.userService = userService;
    }
    async onModuleInit() {
        const categories = await this.createCategories();
        const articles = await this.createArticles();
        const courses = await this.createCourses();
        const users = await this.createUsers();
    }
    async createCategories() {
        return await this.categoryService.createCategories(CATEGORIES_JSON);
    }
    async createArticles() {
        return await this.articleService.createArticles(ARTICLES_JSON);
    }
    async createCourses() {
        for (const createCourseBulkDTO of COURSES_JSON) {
            await this.courseService.createCourseBulk(createCourseBulkDTO);
        }
    }
    async createUsers() {
        for (const createUserDto of USERS_JSON) {
            await this.userService.createUser(Object.assign(Object.assign({}, createUserDto), { role: createUserDto.role }));
        }
    }
};
DataInitializerModule = __decorate([
    (0, common_1.Module)({
        imports: [article_module_1.ArticleModule, course_module_1.CourseModule, category_module_1.CategoryModule, user_module_1.UserModule]
    }),
    __metadata("design:paramtypes", [article_service_1.ArticleService,
        category_service_1.CategoryService,
        course_service_1.CourseService,
        user_service_1.UserService])
], DataInitializerModule);
exports.DataInitializerModule = DataInitializerModule;
//# sourceMappingURL=data-initializer.module.js.map