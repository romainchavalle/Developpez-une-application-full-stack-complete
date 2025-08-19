package com.openclassrooms.mddapi.services.impl;

import com.openclassrooms.mddapi.models.Article;
import com.openclassrooms.mddapi.models.Subject;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.repository.ArticleRepository;
import com.openclassrooms.mddapi.repository.SubjectRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import com.openclassrooms.mddapi.responses.ArticleDto;
import com.openclassrooms.mddapi.services.ArticleService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;
    private final SubjectRepository subjectRepository;

    public ArticleServiceImpl(ArticleRepository articleRepository, UserRepository userRepository, SubjectRepository subjectRepository) {
        this.articleRepository = articleRepository;
        this.userRepository = userRepository;
        this.subjectRepository = subjectRepository;
    }


    @Override
    public List<ArticleDto> getAllArticlesFromSubjectsSubscribed(Long userId) {
        // Get authenticated user
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("Author not found"));

        // Get articles from subject's subscriptions
        List<Article> articles = user.getSubscriptions().stream()
                .map(subscription -> subscription.getSubject().getArticles())
                .flatMap(List::stream)
                .collect(Collectors.toList());

        // Concert to dto
        return articles.stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public void createArticle(ArticleDto articleDto, Long authorId) {
        Article article = new Article();
        article.setTitle(articleDto.getTitle());
        article.setContent(articleDto.getContent());

        // Find author in users
        User author = userRepository.findById(authorId)
                .orElseThrow(() -> new IllegalArgumentException("Author not found"));
        article.setAuthor(author);

        // Find subject
        Subject subject = subjectRepository.findById(articleDto.getSubjectId())
                .orElseThrow(() -> new IllegalArgumentException("Subject not found"));
        article.setSubject(subject);

        articleRepository.save(article);

    }

    public ArticleDto getArticleById(Long id) {
        Article article = articleRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Article not found"));
        return toDto(article);
    }



    private ArticleDto toDto(Article article) {
        return new ArticleDto(article);
    }


}
