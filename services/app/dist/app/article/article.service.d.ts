import { Repository } from "typeorm";
import { CategoryService } from "../category/category.service";
import { Article } from "./article.entity";
import { CreateArticleDTO } from "./dto/create-article.dto";
import { UpdateArticleDTO } from "./dto/update-article.dto";
export declare class ArticleService {
    private readonly articleRepository;
    private readonly categoryService;
    constructor(articleRepository: Repository<Article>, categoryService: CategoryService);
    getArticles(): Promise<Article[]>;
    createArticles(createArticleDTOs: CreateArticleDTO[]): Promise<Article[]>;
    createArticle(createArticleDTO: CreateArticleDTO): Promise<Article>;
    updateArticle(id: string, updateArticleDTO: UpdateArticleDTO): Promise<Article>;
    deleteArticle(id: string): Promise<boolean>;
    restoreDeletedArticle(id: string): Promise<any>;
    private preloadCategory;
}
