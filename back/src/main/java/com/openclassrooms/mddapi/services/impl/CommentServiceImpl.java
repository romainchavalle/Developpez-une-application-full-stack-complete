package com.openclassrooms.mddapi.services.impl;

import com.openclassrooms.mddapi.models.Comment;
import com.openclassrooms.mddapi.repository.ArticleRepository;
import com.openclassrooms.mddapi.repository.CommentRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import com.openclassrooms.mddapi.responses.CommentDto;
import com.openclassrooms.mddapi.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private UserRepository userRepository;

    public List<CommentDto> getByArticle(Long articleId) {
        return commentRepository.findByArticleId(articleId)
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public CommentDto postComment(String content, Long userId, Long articleId) {
        Comment newComment = new Comment();
        newComment.setArticle(articleRepository.findById(articleId).orElseThrow(() -> new IllegalArgumentException("Article not found")));
        newComment.setContent(content);
        newComment.setAuthor(userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("User not found")));
        commentRepository.save(newComment);

        return new CommentDto(newComment);
    }

    private CommentDto toDto(Comment comment) {
        return new CommentDto(comment);
    }

}
