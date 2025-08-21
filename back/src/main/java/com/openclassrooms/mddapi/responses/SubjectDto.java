package com.openclassrooms.mddapi.responses;

import com.openclassrooms.mddapi.models.Subject;
import lombok.Data;

@Data
public class SubjectDto {
    Long id;
    String name;
    String content;
    Boolean isSubscribed;

    public SubjectDto(Subject subject, Boolean isSubscribed ) {
        this.id = subject.getId();
        this.name = subject.getName();
        this.content = subject.getContent();
        this.isSubscribed = isSubscribed;
    }
}
