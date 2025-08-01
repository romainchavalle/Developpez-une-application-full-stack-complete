package com.openclassrooms.mddapi.responses;

import com.openclassrooms.mddapi.models.Subject;
import lombok.Data;

@Data
public class SubjectDto {
    Long id;
    String name;

    public SubjectDto(Subject subject ) {
        this.id = subject.getId();
        this.name = subject.getName();
    }
}
