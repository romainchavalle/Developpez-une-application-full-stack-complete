# 🛡️ Secure Full-Stack Application

> A comprehensive full-stack platform featuring advanced JWT security, modular Angular frontend, and a robust Spring Boot backend.

![Java](https://img.shields.io/badge/Java_21-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

## 📖 Overview

This project is a complete, production-ready Full-Stack application. It demonstrates the seamless integration of a **Spring Boot REST API** with an **Angular Single Page Application (SPA)**, heavily focused on security, maintainability, and clean architecture.

The platform includes several modular features such as User Management, Posts, Messaging, and Rentals, all protected by a custom JWT-based authentication system.

---

## 🏗️ Architecture & Security

### 🔙 Backend (Java / Spring Boot)
The backend is structured to provide a secure and scalable API:
- **Advanced Security:** Full implementation of Spring Security.
  - `JwtUtils` & `AuthTokenFilter` for token generation and request interception.
  - `UserDetailsServiceImpl` for secure database authentication.
  - `AuthEntryPointJwt` to handle unauthorized request attempts gracefully.
- **Data Layer:** Spring Data JPA with MySQL. Includes clean DTO mapping (`RentDtoMapper`) to prevent over-posting and secure internal entity structures.
- **RESTful Endpoints:** Isolated controllers for `Auth`, `Messages`, `Posts`, and `Rentals`.

### 🖥️ Frontend (Angular)
The Angular application is highly modularized, focusing on user experience and client-side security:
- **Feature Modules:** Logic is neatly divided into domain-specific modules (`auth`, `messages`, `posts`, `rentals`).
- **Route Guards:** Implementation of `AuthGuard` and `UnauthGuard` to manage view access based on user session state.
- **JWT Interceptor:** An HTTP Interceptor (`jwt.interceptor.ts`) automatically attaches the JWT Bearer token to outgoing backend requests.
- **Reactive Forms:** Used extensively for login, registration, and data submission with built-in validation.

---

## 🚀 Getting Started

### Prerequisites
- Java 21+
- Node.js & Angular CLI
- MySQL Database

### 1. Backend Setup (`/back`)
1. Navigate to the backend directory:
   ```bash
   cd back
   ```
2. Configure your MySQL credentials in `src/main/resources/application.properties`.
3. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```
   *The API will start on `http://localhost:3001`.*

### 2. Frontend Setup (`/front`)
1. Navigate to the frontend directory:
   ```bash
   cd front
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run start
   ```
   *The Angular app will be available at `http://localhost:4200`.*

---

## 🧪 Future Improvements
- Migration from standard JWT to OAuth2/OIDC (Keycloak integration).
- Full Dockerization (Backend, Frontend, and Database) for easier deployment.

---
*Developed by Romain Chavalle.*
