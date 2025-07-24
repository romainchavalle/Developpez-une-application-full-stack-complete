package com.openclassrooms.mddapi.services.impl;

import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.repository.UserRepository;
import com.openclassrooms.mddapi.requests.LoginRequest;
import com.openclassrooms.mddapi.requests.RegisterRequest;
import com.openclassrooms.mddapi.responses.JwtResponse;
import com.openclassrooms.mddapi.security.jwt.JwtUtils;
import com.openclassrooms.mddapi.security.services.UserDetailsImpl;
import com.openclassrooms.mddapi.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    AuthenticationManager authManager;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    public JwtResponse login(LoginRequest loginRequest) {

      return getJwtResponseFromAuthentication(loginRequest.getIdentifier(), loginRequest.getPassword());

    }

    @Transactional
    public JwtResponse register(RegisterRequest registerRequest) {
        // Check if user already exists
        if (userRepository.existsByUsernameOrEmail(registerRequest.getUsername(), registerRequest.getEmail())) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "User with this email already exists!"
            );
        }

        // If not, create new user's account
        User user = new User(registerRequest.getUsername(),
                registerRequest.getEmail(),
                passwordEncoder.encode(registerRequest.getPassword()));

        userRepository.save(user);

        // Authenticate and return jwt for request
        return getJwtResponseFromAuthentication(registerRequest.getEmail(), registerRequest.getPassword());
    }

    private JwtResponse getJwtResponseFromAuthentication(String username, String password) {
        Authentication auth = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password));

        String token = jwtUtils.generateJwtToken(auth);
        UserDetailsImpl user = (UserDetailsImpl) auth.getPrincipal();

        return new JwtResponse(token, user.getId(), user.getUsername());
    }
}
