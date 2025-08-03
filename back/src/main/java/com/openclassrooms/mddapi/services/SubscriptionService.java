package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.responses.SubscriptionDto;
import com.openclassrooms.mddapi.security.services.UserDetailsImpl;

import java.util.List;

public interface SubscriptionService {
    List<SubscriptionDto> getUserSubscriptions(Long userId);
    SubscriptionDto create(Long userId, Long subjectId);
    void delete(Long userId, Long subjectId);
}
