package com.examly.springapp.service;
 
import java.util.List;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.ProjectProposal;
import com.examly.springapp.repository.ProjectProposalRepo;
import com.examly.springapp.repository.UserRepo;
 
@Service
public class ProjectProposalServiceImpl implements ProjectProposalService{
   
    @Autowired ProjectProposalRepo proposalRepo;
    @Autowired UserRepo userRepo;
 
    public ProjectProposal addProjectProposal(ProjectProposal projectProposal){
        return proposalRepo.save(projectProposal);
    }
 
    public List<ProjectProposal> getAllProjectProposalsByUserId(Long userId){
        return proposalRepo.findByUserUserId(userId);
    }
    // public ProjectProposal getAllProjectProposalsByProposalId(Long proposalId){
    //     return proposalRepo.findByProjectProposalProposalId(proposalId);
    // }
   
    public List<ProjectProposal> getAllProjectProposals(){
        return proposalRepo.findAll();
    }
 
    public ProjectProposal editprojectProposal(Long proposalId,ProjectProposal updatedProposal){
        ProjectProposal p = proposalRepo.findById(proposalId).orElse(null);
        if(p!=null){
            p.setProposalTitle(updatedProposal.getProposalTitle());
            p.setProposalTitle(updatedProposal.getProposalTitle());
            p.setStatus(updatedProposal.getStatus());
            return proposalRepo.save(p);
        }else{
            return null;
        }
    }
 
    public ProjectProposal deleteProjectProposal(Long proposalId){
        ProjectProposal p = proposalRepo.findById(proposalId).orElse(null);
        if(p!=null){
            proposalRepo.delete(p);
            return p;
        }
        return null;
    }
   
}