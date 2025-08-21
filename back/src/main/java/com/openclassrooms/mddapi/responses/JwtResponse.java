package com.openclassrooms.mddapi.responses;

import lombok.Data;

@Data
public class JwtResponse {
    String token, type = "Bearer";
    Long id; String username;

    public JwtResponse(String token, Long id, String username) {
        this.token = token;
        this.id = id;
        this.username = username;
    }
}
