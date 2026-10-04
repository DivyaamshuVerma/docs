package com.examly.springapp.model;

public class LoginDTO {
    private String email;
    private String role;
    private String token;
    private long userId;
    private String username;

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public long getUserId() {
        return userId;
    }
    public void setUserId(long userId) {
        this.userId = userId;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
    public String getToken() {
        return token;
    }
    public void setToken(String token) {
        this.token = token;
    }
    public LoginDTO(String email, String role, String token, String username) {
        this.email = email;
        this.role = role;
        this.token = token;
        this.username=username;
    }
    public LoginDTO(){
        
    }
}