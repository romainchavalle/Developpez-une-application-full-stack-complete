package com.openclassrooms.mddapi.responses;

import com.openclassrooms.mddapi.models.Article;
import lombok.Data;

import java.time.Instant;

@Data
public class ArticleDto {
    Long id;
    String title;
    String content;
    Long authorId;
    Long subjectId;
    Instant created_at;

    public ArticleDto() {}

    public ArticleDto(Article article) {
        this.id = article.getId();
        this.title = article.getTitle();
        this.content = article.getContent();
        this.authorId = article.getAuthor().getId();
        this.subjectId = article.getSubject().getId();
        this.created_at = article.getCreatedAt();
    }
}
