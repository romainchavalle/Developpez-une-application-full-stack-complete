package com.openclassrooms.mddapi.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "comments")
public class Comment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    private String content;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User author;

    @ManyToOne
    @JoinColumn(name = "article_id", nullable = false)
    private Article article;

}
