package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.requests.LoginRequest;
import com.openclassrooms.mddapi.requests.RegisterRequest;
import com.openclassrooms.mddapi.responses.JwtResponse;

public interface AuthService {
    public JwtResponse register(RegisterRequest req);
    public JwtResponse login(LoginRequest req);
}
