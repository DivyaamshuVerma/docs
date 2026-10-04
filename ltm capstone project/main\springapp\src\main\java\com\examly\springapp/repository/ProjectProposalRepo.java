package com.examly.springapp.repository;
 
import java.util.List;
 
import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;

import com.examly.springapp.model.ProjectProposal;
 
public interface ProjectProposalRepo extends JpaRepository<ProjectProposal,Long>{
    // @Query("select p from ProjectProposal p where p.user_Id = userId")
    List<ProjectProposal> findByUserUserId(Long userId);
   // ProjectProposal findByProjectProposalProposalId(Long proposalId);
}