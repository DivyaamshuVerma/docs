package com.examly.springapp.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
 
@Entity
public class ProjectProposal {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long proposalId;
    String proposalTitle;
    String proposalDescription;
    String status;
    
    @ManyToOne
    @JoinColumn(name="user_id")
    User user;
    
    public Long getProposalId() {
        return proposalId;
    }
    public void setProposalId(Long proposalId) {
        this.proposalId = proposalId;
    }
    public String getProposalTitle() {
        return proposalTitle;
    }
    public void setProposalTitle(String proposalTitle) {
        this.proposalTitle = proposalTitle;
    }
    public String getProposalDescription() {
        return proposalDescription;
    }
    public void setProposalDescription(String proposalDescription) {
        this.proposalDescription = proposalDescription;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
}
 