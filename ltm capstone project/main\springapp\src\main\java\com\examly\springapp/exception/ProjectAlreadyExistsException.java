package com.examly.springapp.exception;
public class ProjectAlreadyExistsException extends RuntimeException {
    public ProjectAlreadyExistsException (String e){
        super(e);
    }
}
