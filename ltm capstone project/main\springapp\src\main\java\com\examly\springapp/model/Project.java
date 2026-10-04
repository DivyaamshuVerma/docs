package com.examly.springapp.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
@Entity
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     private long projectId;
     
     private String projectTitle;
     private String projectDescription;
     private LocalDate startDate;
    private LocalDate endDate;
    private String frontEndTechStack;
    private String backendTechStack;
    private String databaseStack;
    private String status;
    
    @ManyToOne
    @JoinColumn(name="user_id")
    User user;
    
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    Project() {
    }

    public long getProjectId() {
        return projectId;
    }
    public void setProjectId(long projectId) {
        this.projectId = projectId;
    }
    public String getProjectTitle() {
        return projectTitle;
    }
    public void setProjectTitle(String projectTitle) {
        this.projectTitle = projectTitle;
    }
    public String getProjectDescription() {
        return projectDescription;
    }
    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }
    public LocalDate getStartDate() {
        return startDate;
    }
    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }
    public LocalDate getEndDate() {
        return endDate;
    }
    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }
    public String getFrontEndTechStack() {
        return frontEndTechStack;
    }
    public void setFrontEndTechStack(String frontEndTechStack) {
        this.frontEndTechStack = frontEndTechStack;
    }
    public String getbackendTechStack() {
        return backendTechStack;
    }
    public void setbackendTechStack(String backendTechStack) {
        this.backendTechStack = backendTechStack;
    }
    public String getDatabaseStack() {
        return databaseStack;
    }
    public void setDatabaseStack(String databaseStack) {
        this.databaseStack = databaseStack;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    }