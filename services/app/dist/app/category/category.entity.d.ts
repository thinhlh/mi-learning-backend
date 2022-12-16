import { Article } from "../article/article.entity";
import { Course } from "../course/course.entity";
export declare class Category {
    id: string;
    title: string;
    background: string;
    deletedAt: Date;
    courses: Course[];
    articles: Article[];
}
