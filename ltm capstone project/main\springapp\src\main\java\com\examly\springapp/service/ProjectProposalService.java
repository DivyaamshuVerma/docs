package com.examly.springapp.service;
 
import java.util.List;
 

import org.springframework.stereotype.Service;

import com.examly.springapp.model.ProjectProposal;
 
@Service
public interface ProjectProposalService{
    ProjectProposal addProjectProposal(ProjectProposal projectProposal);
    List<ProjectProposal> getAllProjectProposals();
    List<ProjectProposal> getAllProjectProposalsByUserId(Long userId);
    // ProjectProposal getAllProjectProposalsByProposalId(Long userId);
    ProjectProposal editprojectProposal(Long proposalId,ProjectProposal updatedProposal);
    ProjectProposal deleteProjectProposal(Long proposalId);
}