package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.responses.SubscriptionDto;

public interface SubscriptionService {
    SubscriptionDto create(Long userId, Long subjectId);
    void delete(Long userId, Long subjectId);
}
