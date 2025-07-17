package com.openclassrooms.mddapi.models;

import lombok.Data;
import javax.persistence.*;

@Entity
@Data
@Table(name = "subscriptions")
public class Subscription {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "subject_id", nullable = false)
    private Subject subject;

}
