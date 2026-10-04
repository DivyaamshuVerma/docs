import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-manager-add-project',
  templateUrl: './manager-add-project.component.html',
  styleUrls: ['./manager-add-project.component.css']
})
export class ManagerAddProjectComponent implements OnInit {
  projectForm: FormGroup;
Error:string='';
  constructor(private fb: FormBuilder, private projectService:ProjectService) {
    this.projectForm = this.fb.group({
      projectTitle: ['', Validators.required],
      projectDescription: ['', Validators.required],
      startDate: ['',Validators.required],
      endDate: ['', Validators.required],
      frontEndTechStack: ['', Validators.required],
      backendTechStack: ['', Validators.required],
      databaseStack: ['', Validators.required],
      // status: ['Pending']
    },{validators:[this.dateValidator,this.preDatevalidator]});
}
ngOnInit(): void {
 
}

preDatevalidator(form: FormGroup) {
  const pre = new Date();
  console.log(pre);
  const start = new Date(form.get('startDate').value);
console.log(start)
  if (start<pre) {
   
    return { 'dateInvalidpre': true};
  }
  return null;
}
onpreDateChange() {

  if (this.projectForm.errors?.dateInvalidpre) {
    console.log("inside the l")
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Start date should be greater than Present date..",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
    
  }
}


  dateValidator(form: FormGroup) {
    const start = form.get('startDate').value;
    const end = form.get('endDate').value;

    if (start && end && end < start) {
     
      return { 'dateInvalid': true};
    }
    return null;
  }
  onDateChange() {
    if (this.projectForm.errors?.dateInvalid) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "End Date should be greater than Start date..",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      
    }
  }

  addProject() {
    if (this.projectForm.valid) {
   let form=this.projectForm.value;
  form.status="Pending";
     this.projectService.addProject(form).subscribe(data=>{
      console.log("addProjectManger",data);
      Swal.fire({
        title: "Great",
        text: "Project Added Successfully",
        icon: "success"
      });
      this.projectForm.reset();
    },(error)=>{
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: "Project Already Exists!!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      
    });
    } 
  }
}

