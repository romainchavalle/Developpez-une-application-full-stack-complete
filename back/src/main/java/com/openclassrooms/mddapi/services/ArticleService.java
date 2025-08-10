package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.responses.ArticleDto;

import java.util.List;

public interface ArticleService {

    List<ArticleDto> getAllArticlesFromSubjectsSubscribed(Long userId);

    void createArticle(ArticleDto article, Long authorId);

    ArticleDto getArticleById(Long id);
}
