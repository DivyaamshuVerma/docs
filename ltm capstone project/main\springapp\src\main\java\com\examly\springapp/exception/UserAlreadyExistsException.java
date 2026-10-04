package com.examly.springapp.exception;

public class UserAlreadyExistsException extends RuntimeException {
    public UserAlreadyExistsException(String e){
        super(e);
    }
}
