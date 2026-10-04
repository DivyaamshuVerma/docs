package com.examly.springapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Project;
import com.examly.springapp.model.ProjectProposal;

@Repository
public interface ProjectRepo extends JpaRepository<Project,Long>{
   public Optional<Project> findByProjectTitle(String projectTitle);
   List<Project> findByUserUserId(Long userId);
}

