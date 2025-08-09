package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.responses.SubjectDto;
import com.openclassrooms.mddapi.responses.SubscriptionDto;
import com.openclassrooms.mddapi.security.services.UserDetailsImpl;
import com.openclassrooms.mddapi.services.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/subjects")
public class SubjectController {

    @Autowired
    private SubjectService subjectService;

    @GetMapping
    public ResponseEntity<List<SubjectDto>> getAll(@AuthenticationPrincipal UserDetailsImpl userPrincipal) {
        Long userId = userPrincipal.getId();
        List<SubjectDto> subjects = this.subjectService.getAllSubjects(userId);
        return ResponseEntity.ok(subjects);
    }

    @GetMapping("/subscribed")
    public ResponseEntity<List<SubjectDto>> getSubjectsSubscribed(@AuthenticationPrincipal UserDetailsImpl userPrincipal) {
        Long userId = userPrincipal.getId();
        List<SubjectDto> subjectsSubscribed = subjectService.getSubjectsSubscribed(userId);
        return ResponseEntity.ok(subjectsSubscribed);
    }

}
