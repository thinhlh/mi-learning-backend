package com.thinhlh.mi_learning_backend.app.article.domain.usecase;

import com.thinhlh.mi_learning_backend.app.article.controller.dto.ArticleRequest;
import com.thinhlh.mi_learning_backend.app.article.domain.entity.Article;
import com.thinhlh.mi_learning_backend.app.article.domain.service.ArticleService;
import com.thinhlh.mi_learning_backend.base.BaseUseCase;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CreateArticleUseCase implements BaseUseCase<ArticleRequest, Article> {

    private final ArticleService articleService;

    @Override
    public Article invoke(ArticleRequest data) throws RuntimeException {
        return articleService.createArticle(data);
    }
}
