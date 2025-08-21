package com.openclassrooms.mddapi.responses;

import com.openclassrooms.mddapi.models.Comment;
import lombok.Data;

@Data
public class CommentDto {
    String content;
    Long articleId;
    String userName;

    public CommentDto(Comment comment) {
        this.content = comment.getContent();
        this.articleId = comment.getArticle().getId();
        this.userName =  comment.getAuthor().getUsername();
    }
}
