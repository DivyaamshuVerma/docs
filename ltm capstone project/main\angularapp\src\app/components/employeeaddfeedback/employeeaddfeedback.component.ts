import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback } from 'src/app/models/feedback.model';
import { FeedbackService } from 'src/app/services/feedback.service';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-employeeaddfeedback',
  templateUrl: './employeeaddfeedback.component.html',
  styleUrls: ['./employeeaddfeedback.component.css']
})
export class EmployeeaddfeedbackComponent implements OnInit {
  feedBackForm: FormGroup;
  feedback:Feedback;
  NewFeedback : Feedback = null ;
 
  constructor(private builder: FormBuilder, private service: FeedbackService) {
    console.log("inside add feed back constructor")
    this.feedBackForm = builder.group({
      feedbackText: builder.control("", Validators.required)
    });
  }
 
  public get feedbackText() {
    return this.feedBackForm.get('feedbackText');
  }
 
  ngOnInit(): void {
    console.log("inside add feedback----------------------------------")
  }
 
  addFeedBack() {
    // const modal = document.getElementById("successPopup");
    // if (modal) {
    //   modal.style.display = "block";
    // }
    if (this.feedBackForm.valid) {
      this.NewFeedback = this.feedBackForm.value;
      this.NewFeedback.user={userId:parseInt(localStorage.getItem("userId"))}
      this.NewFeedback.date = new Date(); 
      console.log(this.NewFeedback);
      this.service.sendFeedback(this.NewFeedback).subscribe(response => {
        console.log("Sucess");
        Swal.fire({
          title: "Great",
          text: "FeedBack Added Successfully",
          icon: "success"
        });
        this.feedBackForm.reset();
      });
      
    }
  }
  closePopup(){
    const modal = document.getElementById("successPopup");
    if(modal){
      modal.style.display = "none";
      // this.feedBackForm.reset();
    }
  }
  closePopup1(){
    const modal = document.getElementById("successPopup");
    if(modal){
      modal.style.display = "none";
      this.feedBackForm.reset();
    }
  }
}
 
 
 