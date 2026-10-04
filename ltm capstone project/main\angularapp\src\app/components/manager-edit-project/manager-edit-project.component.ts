import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manager-edit-project',
  templateUrl: './manager-edit-project.component.html',
  styleUrls: ['./manager-edit-project.component.css']
})
export class ManagerEditProjectComponent implements OnInit {
  projectForm: FormGroup;
  projectId;
  constructor(private fb: FormBuilder, private projectService:ProjectService,private route: ActivatedRoute,private r:Router) {
    this.projectForm = this.fb.group({
      projectTitle: ['', Validators.required],
      projectDescription: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      frontEndTechStack: ['', Validators.required],
      backendTechStack: ['', Validators.required],
      databaseStack: ['', Validators.required],
      status: ['', Validators.required]
    });
  }
  
  ngOnInit(): void {
    this.projectId = (this.route.snapshot.queryParamMap.get('Id'));
    this.loadProjectData();
  }
  loadProjectData(): void {
    this.projectService.getProjectById(this.projectId).subscribe(data => {
      console.log(data);
      this.projectForm.patchValue({
      projectTitle: data.projectTitle,
      projectDescription: data.projectDescription,
      startDate: data.startDate,
      endDate: data.endDate,
      frontEndTechStack: data.frontEndTechStack,
      backendTechStack:data.backendTechStack, 
      databaseStack: data.databaseStack,
       status: data.status,
      });
    });
  }

//   onSubmit(): void {
//     if (this.projectForm.valid) {
//       this.projectService.updateProject(this.projectId, this.projectForm.value).subscribe(data => {
//         console.log("Project updated successfully");
//       });
//     }
//   } 
// }
editProject() {
    if (this.projectForm.valid) {
    return this.projectService.updateProject(this.projectId,this.projectForm.value).subscribe(data=>{
      console.log("data");
      Swal.fire({
        title: "Great",
        text: "Project Updated Successfully",
        icon: "success"
      });
      this.projectForm.reset();
    });
    } 
  }

}