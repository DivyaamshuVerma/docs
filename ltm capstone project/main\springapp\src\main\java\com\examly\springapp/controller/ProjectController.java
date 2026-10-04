package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.exception.ProjectAlreadyExistsException;
import com.examly.springapp.model.Project;
import com.examly.springapp.model.ProjectProposal;
import com.examly.springapp.model.User;
import com.examly.springapp.service.ProjectService;
import com.examly.springapp.service.ProjectServiceImpl;
import com.examly.springapp.service.UserService;

@RestController
public class ProjectController {
    @Autowired
    ProjectService projectService;

    @Autowired
    UserService userService;

    @PostMapping("/api/projects")
    public ResponseEntity<Project> addProject(@RequestBody Project Project){
        Project p = projectService.addProject(Project);
        if(p!=null){
            return ResponseEntity.status(HttpStatus.CREATED).body(p);
            
        }
        else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);

        }
        
    }
    
    @GetMapping("/api/projects")
    public ResponseEntity <List<Project>> getAllProjects(){
        List<Project> p  = projectService.getAllProjects();
        if(p!=null){
            return ResponseEntity.status(HttpStatus.OK).body(p);    
        }
        else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
            
        }
    }  


    ////ijnvfl
    @GetMapping("/api/projects/{projectId}")
    public ResponseEntity<Project> getProjectById(@PathVariable long projectId){
        Project p = projectService.getProjectsById(projectId);
        if(p!=null){
            return ResponseEntity.status(HttpStatus.OK).body(p);
        }
        else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
@PutMapping("/api/projects/{projectId}")
public ResponseEntity<Project> editProject( @PathVariable long projectId,@RequestBody Project project){
    Project p = projectService.editProject(projectId,project);
    if(p!=null){
        return ResponseEntity.status(HttpStatus.OK).body(p);
        
    }
    else{
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);

    }
    
}
@DeleteMapping("/api/projects/{projectId}")
public ResponseEntity<Project> deleteProject(@PathVariable long projectId){
    Project p = projectService.deleteProject(projectId);
    if(p!=null){
        return ResponseEntity.status(HttpStatus.OK).body(p);
    }else{
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
    
}
@GetMapping("/api/projects/user")
public ResponseEntity<List<User>> getAllUser(){
    List<User> u  = userService.getAllUser();
        if(u!=null){
            return ResponseEntity.status(HttpStatus.OK).body(u);    
        }
        else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
            
        }
}
@GetMapping("/api/projects/user/{userId}")
    public ResponseEntity<List<Project>> getAllProjectsByUserId(@PathVariable Long userId){
        List<Project> p = projectService.getAllProjectByUserId(userId);
        if(p!=null){
            return ResponseEntity.status(HttpStatus.OK).body(p);
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
@ExceptionHandler(ProjectAlreadyExistsException.class)
public ResponseEntity<?> handleProjectAlreadyExistsException(ProjectAlreadyExistsException e){
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
}
}