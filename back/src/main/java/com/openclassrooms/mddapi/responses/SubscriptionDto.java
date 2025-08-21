package com.openclassrooms.mddapi.responses;

import com.openclassrooms.mddapi.models.Subscription;
import lombok.Data;

@Data
public class SubscriptionDto {
    Long subjectId;

    public SubscriptionDto() { }

    public SubscriptionDto(Subscription subscription) {
        this.subjectId = subscription.getSubject().getId();
    }
}
