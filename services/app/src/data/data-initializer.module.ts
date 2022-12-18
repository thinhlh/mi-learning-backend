import { Module, OnModuleInit } from "@nestjs/common";
import * as CATEGORIES_JSON from "src/data/categories.json";
import * as ARTICLES_JSON from "src/data/articles.json";
import * as COURSES_JSON from "src/data/courses.json";
import * as USERS_JSON from "src/data/users.json";
import * as RATINGS_JSON from "src/data/ratings.json";
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
import { Course } from "src/app/course/course.entity";
import { User } from "src/app/user/user.entity";
import { RatingModule } from "src/app/rating/rating.module";
import { RatingService } from "src/app/rating/rating.service";

@Module({
    imports: [ArticleModule, CourseModule, CategoryModule, UserModule, RatingModule]
})
export class DataInitializerModule implements OnModuleInit {
    constructor(
        private readonly articleService: ArticleService,
        private readonly categoryService: CategoryService,
        private readonly courseService: CourseService,
        private readonly userService: UserService,
        private readonly ratingService: RatingService,
    ) { }
    async onModuleInit() {
        const categories = await this.createCategories();
        const articles = await this.createArticles();
        let users = await this.userService.findAllStudents()

        if (users.length == 0) {
            users = await this.createUsers();
            users = await this.userService.findAllStudents()
            const courses = await this.createCourses();
            const ratings = await this.createRatings(courses, users.filter((user) => user.role == Role.STUDENT));
        }
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
        const res = []
        for (const createCourseBulkDTO of COURSES_JSON) {
            res.push(await this.courseService.createCourseBulk(createCourseBulkDTO));
        }

        return res
    }

    private async createUsers(): Promise<User[]> {
        const res = []
        for (const createUserDto of USERS_JSON) {
            res.push(await this.userService.createUser({ ...createUserDto, role: createUserDto.role as Role }))
        }

        return res
    }

    private async createRatings(courses: Course[], students: User[]) {
        const ratings = RATINGS_JSON
        const ratingLen = ratings.length
        for (const course of courses) {
            for (let i = 0; i < this.getRandomNumberExclusive(0, ratingLen); i++) {
                await this.ratingService.createRating({
                    value: this.getRandomNumberExclusive(1, 6),
                    content: ratings[this.getRandomNumberExclusive(0, ratingLen)],
                    courseId: course.id,
                    studentId: students[this.getRandomNumberExclusive(0, students.length)].id
                })
            }
        }
    }

    private getRandomNumberExclusive(min: number, max: number): number {
        const res = Math.floor(Math.random() * (max - min) + min)
        return res
    }
}