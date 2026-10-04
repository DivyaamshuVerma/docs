import { Component, OnInit } from '@angular/core';
import { ProjectProposal } from 'src/app/models/projectProposal.model';
import { ProjectProposalService } from 'src/app/services/project-proposal.service';

@Component({
  selector: 'app-manager-view-proposal',
  templateUrl: './manager-view-proposal.component.html',
  styleUrls: ['./manager-view-proposal.component.css']
})
export class ManagerViewProposalComponent implements OnInit {
  proposals:ProjectProposal[]= [];
  // filteredProposals = [];
  // searchTerm: string = '';
  searchTerm: string = '';
  constructor(private service:ProjectProposalService) {}

  ngOnInit(): void {
    this.getAllProposls();
  }

  // filterProposals(): void {
  //   this.filteredProposals = this.proposals.filter(proposal =>
  //     proposal.proposalTitle.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //     proposal.proposalDescription.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   );
  // }
  filterProposals(){
    
      if(this.searchTerm.trim().length!=0){
        this.proposals=this.proposals.filter(p=>{
          return p.proposalTitle.toLowerCase().includes(this.searchTerm.toLowerCase());
        })
      }else{
        this.getAllProposls();
      }
    }
  
  getAllProposls(){
    this.service.getAllProjectProposals().subscribe(data=>{
      this.proposals=data;
      console.log(this.proposals);
    })
  }
  
  approveproposal(proposal :ProjectProposal)
  {
    let Id = proposal.proposalId ;
    proposal.status = "Approved" ;
    this.service.updateProjectProposal(Id,proposal).subscribe(data=>{
      this.getAllProposls();
      console.log("Sucess");
      
    })
  }
  
  rejectproposal(proposal:ProjectProposal){
    let Id=proposal.proposalId;
    proposal.status="Rejected";
    this.service.updateProjectProposal(Id,proposal).subscribe(data=>{
      this.getAllProposls();
      console.log("rejected")
    })
  }


}
