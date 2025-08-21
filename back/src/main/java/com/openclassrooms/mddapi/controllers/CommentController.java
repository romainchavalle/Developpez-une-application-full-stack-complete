package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.responses.CommentDto;
import com.openclassrooms.mddapi.security.services.UserDetailsImpl;
import com.openclassrooms.mddapi.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/articles/{id}/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @GetMapping()
    public ResponseEntity<List<CommentDto>> getByArticle(@PathVariable("id") Long articleId) {

        List<CommentDto> commentDtos = commentService.getByArticle(articleId);
        return ResponseEntity.ok(commentDtos);

    }

    @PostMapping()
    public ResponseEntity<CommentDto> postComment(@RequestBody String content,
                                               @PathVariable("id") Long articleId,
                                               @AuthenticationPrincipal UserDetailsImpl userPrincipal) {
        CommentDto newComment = commentService.postComment(content, userPrincipal.getId(), articleId);
        return ResponseEntity.ok(newComment);
    }

}
