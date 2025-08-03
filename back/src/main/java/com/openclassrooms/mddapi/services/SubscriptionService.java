package com.openclassrooms.mddapi.services;

public interface SubscriptionService {
    void create(Long userId, Long subjectId);
    void delete(Long userId, Long subjectId);
}
