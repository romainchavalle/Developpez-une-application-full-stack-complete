package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.responses.SubscriptionDto;
import com.openclassrooms.mddapi.security.services.UserDetailsImpl;
import com.openclassrooms.mddapi.services.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/subscriptions")
public class SubscriptionController {

    @Autowired
    private SubscriptionService subscriptionService;

    @GetMapping
    public ResponseEntity<List<SubscriptionDto>> getUserSubscriptions(@AuthenticationPrincipal UserDetailsImpl userPrincipal) {
        Long userId = userPrincipal.getId();
        List<SubscriptionDto> subscriptions = subscriptionService.getUserSubscriptions(userId);
        return ResponseEntity.ok(subscriptions);
    }

    @PostMapping
    public ResponseEntity<String> Create(@RequestBody SubscriptionDto subscriptionDto,
                                         @AuthenticationPrincipal UserDetailsImpl userPrincipal) {

        Long userId = userPrincipal.getId();
        subscriptionService.create(userId, subscriptionDto.getSubjectId());
        return ResponseEntity.ok("abonnement créé avec succès");
    }

    @DeleteMapping
    public ResponseEntity<String> Delete(@RequestBody SubscriptionDto subscriptionDto,
                                         @AuthenticationPrincipal UserDetailsImpl userPrincipal) {

        Long userId = userPrincipal.getId();
        subscriptionService.delete(userId, subscriptionDto.getSubjectId());
        return ResponseEntity.ok("abonnement supprimé avec succès");
    }
}
