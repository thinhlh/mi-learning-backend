import { Article } from "./article.entity";
import { ArticleService } from "./article.service";
import { CreateArticleDTO } from "./dto/create-article.dto";
import { UpdateArticleDTO } from "./dto/update-article.dto";
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    getArticles(): Promise<Article[]>;
    createArticle(createArticleDTO: CreateArticleDTO): Promise<Article>;
    updateArticle(updateArticleDTO: UpdateArticleDTO, id: string): Promise<Article>;
    deleteArticle(id: string): Promise<boolean>;
    restoreDeletedArticle(id: string): Promise<any>;
}
