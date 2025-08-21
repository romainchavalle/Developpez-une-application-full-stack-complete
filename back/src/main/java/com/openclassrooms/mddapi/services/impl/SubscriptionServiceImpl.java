package com.openclassrooms.mddapi.services.impl;

import com.openclassrooms.mddapi.models.Subject;
import com.openclassrooms.mddapi.models.Subscription;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.repository.SubjectRepository;
import com.openclassrooms.mddapi.repository.SubscriptionRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import com.openclassrooms.mddapi.responses.SubscriptionDto;
import com.openclassrooms.mddapi.services.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SubscriptionServiceImpl implements SubscriptionService {

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SubjectRepository subjectRepository;


    public SubscriptionDto create(Long userId, Long subjectId) {
        Subscription subscription = new Subscription();

        // Find author in users
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
        subscription.setUser(user);

        // Find subject
        Subject subject = subjectRepository.findById(subjectId)
                .orElseThrow(() -> new IllegalArgumentException("Subject not found"));
        subscription.setSubject(subject);

        Subscription savedSubscription = subscriptionRepository.save(subscription);
        return toDto(savedSubscription);
    }

    public void delete(Long userId, Long subjectId) {

        Subscription subscription = subscriptionRepository.findByUserIdAndSubjectId( userId, subjectId)
                .orElseThrow(() -> new IllegalArgumentException("Subject not found"));

        subscriptionRepository.delete(subscription);
    }

    private SubscriptionDto toDto(Subscription subscription) {
        return new SubscriptionDto(subscription);
    }
}
