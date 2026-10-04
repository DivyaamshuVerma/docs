
package com.examly.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.examly.springapp.exception.ProjectAlreadyExistsException;
import com.examly.springapp.exception.UserAlreadyExistsException;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepo;
 
@Service("userServiceImpl")
public class UserServiceImpl implements UserService{
   
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
 
    @Override
    public User registerUser(User user) {
        User existUser = userRepo.findByEmail(user.getEmail()).orElse(null);
        if(existUser != null){
            throw new UserAlreadyExistsException("User Already Exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }
 
    @Override
    public User loginUser(User user) {
        return null;
    }
 
    @Override
    public String getUserRoleByEmail(String email) {
       User u = userRepo.findByEmail(email).orElse(null);
       if(u != null){
        return u.getRole();
       }else{
        return null;
       }
    }
    public long getUserIdByEmail(String email) {
       User u = userRepo.findByEmail(email).orElse(null);
       if(u != null){
        return u.getUserId();
       }else{
        return 0;
       }
    }

    public String getUsernameByEmail(String email){
        User u = userRepo.findByEmail(email).orElse(null);
       if(u != null){
        return u.getUsername();
       }else{
        return null;
       }
    }

    @Override
    public List<User> getAllUser() {
     return userRepo.findAll();
        
    }
 
}