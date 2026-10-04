import { Component, OnInit } from '@angular/core';
import { ProjectProposal } from 'src/app/models/projectProposal.model';
import { ProjectProposalService } from 'src/app/services/project-proposal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-view-proposal',
  templateUrl: './employee-view-proposal.component.html',
  styleUrls: ['./employee-view-proposal.component.css']
})
export class EmployeeViewProposalComponent implements OnInit {

  proposals:ProjectProposal[] = [] ;

  constructor(private service:ProjectProposalService) { }

  ngOnInit(): void {
    this.getAllProposals();
  }

  
  getAllProposals(){
    let userId = localStorage.getItem("userId").toString();
    return this.service.getProjectProposalsByUserId(userId).subscribe(data=>{
      this.proposals=data
      console.log(this.proposals);
    });
  }
  // x:number=this.proposals.length;

  deleteProjectProsposal(proposalId:number){
    this.service.deleteProjectProposal(proposalId).subscribe(data=>
      {
        console.log("done");
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
          },
          buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
              
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your imaginary file is safe :)",
              icon: "error"
            });
          }
        });
        this.getAllProposals();
      }
    );
   

    // still need to develop delete pop up message which has some complexity will be done tommorrow
  }

}