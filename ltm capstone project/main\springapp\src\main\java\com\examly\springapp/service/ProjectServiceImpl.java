package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.exception.ProjectAlreadyExistsException;
import com.examly.springapp.model.Project;
import com.examly.springapp.repository.ProjectRepo;

@Service
public class ProjectServiceImpl implements ProjectService{
@Autowired
ProjectRepo projectRepo;
    @Override
    public Project addProject(Project project){
        Optional<Project> existproject = projectRepo.findByProjectTitle(project.getProjectTitle());
        if(existproject.isPresent()){
            throw new ProjectAlreadyExistsException("Project with Same Title Already Exists");
        }
        return projectRepo.save(project);
        }
        

    @Override
    public List<Project> getAllProjects() {
        return projectRepo.findAll();
         }

        //  sdnkscn
         @Override
        public Project getProjectsById(long projectId) {
            // Optional<Project> ops = projectRepo.findById(projectId);
            // Project projects=null;
            // if(ops!=null){
            //     projects=ops.get();
            // }`
            // return projects;
            return projectRepo.findById(projectId).orElse(null);
    }
             
    @Override
    public Project editProject(long projectId, Project updatedProject) {
        Optional<Project> ops = projectRepo.findById(projectId);
        Project p = null;
        if(ops.isPresent()){
            p = ops.get();
            p.setProjectTitle(updatedProject.getProjectTitle());
            p.setProjectDescription(updatedProject.getProjectDescription());
            p.setStartDate(updatedProject.getStartDate());
            p.setEndDate(updatedProject.getEndDate());
            p.setFrontEndTechStack(updatedProject.getFrontEndTechStack());
            p.setbackendTechStack(updatedProject.getbackendTechStack());
            p.setDatabaseStack(updatedProject.getDatabaseStack());
            p.setStatus(updatedProject.getStatus());
            p.setUser(updatedProject.getUser());
            return projectRepo.save(p);
        }
        return p;
       
    }
    
    @Override
    public Project deleteProject(long projectId) {
        Optional<Project> ops = projectRepo.findById(projectId);
        if(ops.isPresent()){
            Project p= ops.get();
            projectRepo.deleteById(projectId);
             return p;
           }
           else{
            return null;
           }
        }


    @Override
    public List<Project> getAllProjectByUserId(long userId) {
        return projectRepo.findByUserUserId(userId);
    }
        

}