package com.examly.springapp.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.Utils.utils;
import com.examly.springapp.configuration.JwtUtils;
import com.examly.springapp.exception.ProjectAlreadyExistsException;
import com.examly.springapp.exception.UserAlreadyExistsException;
import com.examly.springapp.model.LoginDTO;
import com.examly.springapp.model.User;
import com.examly.springapp.service.UserService;

@RestController
@CrossOrigin(origins=utils.FRONTEND, allowedHeaders ="*")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtils jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    
    @PostMapping("/api/register")
    public ResponseEntity<?> registerUser(@RequestBody User user){

        User u = userService.registerUser(user);
        if(u!=null){
            return ResponseEntity.status(HttpStatus.CREATED).body(u);
            
        }
        else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);

        }
       
    }

    @PostMapping("/api/login")
    public LoginDTO authenticateAndGetToken(@RequestBody User user){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
        if(authentication.isAuthenticated()){
            LoginDTO loginDTO = new LoginDTO();
            loginDTO.setEmail(user.getEmail());
            loginDTO.setRole(userService.getUserRoleByEmail(user.getEmail()));
            loginDTO.setUserId(userService.getUserIdByEmail(user.getEmail()));
            loginDTO.setToken(jwtService.generateToken(user.getEmail()));
            loginDTO.setUsername(userService.getUsernameByEmail(user.getEmail()));
            return loginDTO;
        } else {
            throw new UsernameNotFoundException("invalid user request..!!");
        }
    }

    @ExceptionHandler(UserAlreadyExistsException.class)
public ResponseEntity<?> handle(UserAlreadyExistsException e){
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
}

}
