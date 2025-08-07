package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.models.Comment;
import com.openclassrooms.mddapi.responses.CommentDto;

import java.util.List;

public interface CommentService {
    List<CommentDto> getByArticle(Long articleId);

    CommentDto postComment(String content, Long userId, Long articleId);
}
