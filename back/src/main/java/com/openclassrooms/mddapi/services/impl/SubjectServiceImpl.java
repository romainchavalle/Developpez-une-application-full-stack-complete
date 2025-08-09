package com.openclassrooms.mddapi.services.impl;

import com.openclassrooms.mddapi.models.Article;
import com.openclassrooms.mddapi.models.Subject;
import com.openclassrooms.mddapi.models.Subscription;
import com.openclassrooms.mddapi.repository.SubjectRepository;
import com.openclassrooms.mddapi.repository.SubscriptionRepository;
import com.openclassrooms.mddapi.responses.ArticleDto;
import com.openclassrooms.mddapi.responses.SubjectDto;
import com.openclassrooms.mddapi.services.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SubjectServiceImpl implements SubjectService {

    @Autowired
    private SubjectRepository subjectRepository;

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @Override
    public List<SubjectDto> getAllSubjects() {
         return subjectRepository.findAll()
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<SubjectDto> getSubjectsSubscribed(Long userId) {
        List<Subscription> subscriptions = subscriptionRepository.findByUserId(userId);

        return subscriptions.stream()
                .map(Subscription::getSubject)
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    private SubjectDto toDto(Subject subject) {
        return new SubjectDto(subject);
    }
}
