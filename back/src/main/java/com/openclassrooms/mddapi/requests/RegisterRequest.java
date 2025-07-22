package com.openclassrooms.mddapi.requests;

import lombok.Data;

@Data
public class RegisterRequest {
    String username, email, password;
}

