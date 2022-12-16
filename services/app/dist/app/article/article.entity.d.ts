import { Category } from "../category/category.entity";
export declare class Article {
    id: string;
    title: string;
    author: string;
    thumbnail: string;
    createdAt: Date;
    deletedAt?: Date;
    url: string;
    category: Category;
}
