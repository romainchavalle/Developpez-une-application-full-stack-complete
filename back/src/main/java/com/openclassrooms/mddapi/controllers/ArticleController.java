package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.responses.ArticleDto;
import com.openclassrooms.mddapi.services.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/articles")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping
    public ResponseEntity<List<ArticleDto>> getAll() {
        List<ArticleDto> articles = articleService.getAllArticles();
        return ResponseEntity.ok(articles);
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody ArticleDto article) {
        articleService.createArticle(article);
        return ResponseEntity.ok("article créé avec succès");
    }
}
