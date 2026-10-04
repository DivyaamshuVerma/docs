package com.examly.springapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.examly.springapp.model.Project;

@Service
public interface ProjectService {
    public Project addProject(Project project);
    public List<Project> getAllProjects();
    public Project editProject(long projectId,Project updatedProject);
    public Project deleteProject(long projectId);
    public Project getProjectsById(long projectId);
    public List<Project> getAllProjectByUserId(long userId);
}