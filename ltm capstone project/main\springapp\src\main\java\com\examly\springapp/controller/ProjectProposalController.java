package com.examly.springapp.controller;
 
import java.util.List;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.ProjectProposal;
import com.examly.springapp.service.ProjectProposalService;

@RestController
public class ProjectProposalController {
 
    @Autowired ProjectProposalService projectProposalService;
 
    @PostMapping("/api/projectproposals")
    public ResponseEntity<ProjectProposal> addProjectProposal(@RequestBody ProjectProposal projectProposal){
        ProjectProposal p = projectProposalService.addProjectProposal(projectProposal);
        if(p!=null){
            return ResponseEntity.status(HttpStatus.CREATED).body(p);
        }else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
 
    @GetMapping("/api/projectproposals/user/{userId}")
    public ResponseEntity<List<ProjectProposal>> getAllProjectProposalsByUserId(@PathVariable Long userId){
        List<ProjectProposal> p = projectProposalService.getAllProjectProposalsByUserId(userId);
        if(p!=null){
            return ResponseEntity.status(HttpStatus.OK).body(p);
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
    // @GetMapping("/api/projectproposals/{proposalId}")
    // public ResponseEntity<ProjectProposal> getAllProjectProposalsByProposalId(@PathVariable Long proposalId){
    //     ProjectProposal p = projectProposalService.getAllProjectProposalsByProposalId(proposalId);
    //     if(p!=null){
    //         return new ResponseEntity<>(p,HttpStatusCode.valueOf(200));
    //     }else{
    //         return new ResponseEntity<>(HttpStatusCode.valueOf(404));
 
    //     }
    // }
 
    @GetMapping("/api/projectproposals")
    public ResponseEntity<List<ProjectProposal>> getAllProjectProposals(){
        List<ProjectProposal> p = projectProposalService.getAllProjectProposals();
        if(p!=null){
            return ResponseEntity.status(HttpStatus.OK).body(p);
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
 
    @DeleteMapping("/api/projectproposals/{proposalId}")
    public ResponseEntity<ProjectProposal> deleteProposalById(@PathVariable Long proposalId){
        ProjectProposal p = projectProposalService.deleteProjectProposal(proposalId);
        if(p!=null){
            return ResponseEntity.status(HttpStatus.OK).body(p);
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
 
    @PutMapping("/api/projectproposals/{proposalId}")
    public ResponseEntity<ProjectProposal> editProposal(@PathVariable Long proposalId,@RequestBody ProjectProposal updatedProject){
        ProjectProposal p = projectProposalService.editprojectProposal(proposalId, updatedProject);
        if(p!=null){
            return new ResponseEntity<>(p,HttpStatusCode.valueOf(200));
        }else{
            return new ResponseEntity<>(HttpStatusCode.valueOf(500));
        }
    }
   
}