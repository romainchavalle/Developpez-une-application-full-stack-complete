package com.openclassrooms.mddapi.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "subjects")
public class Subject {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToMany(mappedBy = "subject", cascade = CascadeType.ALL)
    private List<Article> articles;

    @OneToMany(mappedBy = "subject", cascade = CascadeType.ALL)
    private List<Subscription> subscriptions;

}
