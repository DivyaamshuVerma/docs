import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';
import { FeedbackService } from 'src/app/services/feedback.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employeeviewfeedback',
  templateUrl: './employeeviewfeedback.component.html',
  styleUrls: ['./employeeviewfeedback.component.css']
})
export class EmployeeviewfeedbackComponent implements OnInit {
  feedbacks:Feedback[] = [];

  constructor(private feedbackService:FeedbackService) {
    
  }
  ngOnInit(): void {
    this.loadFeedbacks();
  }

loadFeedbacks(){
    this.feedbackService.getFeedbacks().subscribe(feedback=>{
      this.feedbacks=feedback
      console.log(this.feedbacks);
    })
 }

  deleteFeedback(id: number) {

      this.feedbackService.deleteFeedback(id).subscribe(response=>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
      
      this.loadFeedbacks();
    });
    }
  }




