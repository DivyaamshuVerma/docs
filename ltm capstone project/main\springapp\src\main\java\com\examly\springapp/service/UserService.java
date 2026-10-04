package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.User;

public interface UserService {
public User registerUser(User user);
public User loginUser(User user);
public String getUserRoleByEmail(String email);
public long getUserIdByEmail(String email);
public String getUsernameByEmail(String email);
public List<User> getAllUser();
    
} 