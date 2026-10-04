
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectProposal } from 'src/app/models/projectProposal.model';
import { ProjectProposalService } from 'src/app/services/project-proposal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-add-proposal',
  templateUrl: './employee-add-proposal.component.html',
  styleUrls: ['./employee-add-proposal.component.css']
})
export class EmployeeAddProposalComponent implements OnInit {
  projectProposalForm:FormGroup;
  constructor(private builder:FormBuilder,private proposalservice:ProjectProposalService) { 
    this.projectProposalForm=builder.group({
      proposalTitle:builder.control("",Validators.required),
      proposalDescription:builder.control("",Validators.required)
      // status:builder.control("",Validators.required)
    })
  }

  ngOnInit(): void {
  }
  
  public get projectTitle(){
    return this.projectProposalForm.get("projectTitle");
  }
  public get projectDescription(){
    return this.projectProposalForm.get("projectDescription");
  }
  // public get status(){
  //   return this.projectProposalForm.get("status");
  // }

  addProjectProposal(){
    if(this.projectProposalForm.valid){
      let userId = parseInt(localStorage.getItem("userId"))
      console.log(userId);
      let projectProposal=this.projectProposalForm.value;
      projectProposal.status="Pending";
      projectProposal.user={userId:userId};
      console.log(projectProposal)
      this.proposalservice.addProjectProposal(projectProposal).subscribe(data=>{
        console.log(data);
        Swal.fire({
          title: "Great",
          text: "Proposal Added Successfully",
          icon: "success"
        });
        this.projectProposalForm.reset();
      });
    
    }
  }
}
