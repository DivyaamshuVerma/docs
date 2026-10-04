
import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';

import { FeedbackService } from 'src/app/services/feedback.service';


@Component({
  selector: 'app-managerviewfeedback',
  templateUrl: './managerviewfeedback.component.html',
  styleUrls: ['./managerviewfeedback.component.css']
})
export class ManagerviewfeedbackComponent implements OnInit {
  feedbacks:Feedback[];
  selectedFeedback: Feedback | null = null;
  searchTerm:string='';

  constructor(private service: FeedbackService) { 
    // this.feedbacks = feedbackService.getFeedbacks();
  }

  ngOnInit(): void {
   this.getFeedbacks();
  }

  getFeedbacks(): void {
    this.service.getFeedbacks().subscribe((data: Feedback[]) => {
      console.log(data);
      
      this.feedbacks = data;

  
    })
  }
  

  viewFeedback(feedback: any) {
    this.selectedFeedback = feedback;
  }

  closePopup() {
    this.selectedFeedback = null;
  }
  
}



