
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-employee-view-project',
  templateUrl: './employee-view-project.component.html',
  styleUrls: ['./employee-view-project.component.css']
})
export class EmployeeViewProjectComponent implements OnInit {
  projects:Project[]=[];
  constructor(private service:ProjectService) { }

  ngOnInit(): void {
    this.getAllProjectsByUserId();
  }
  getAllProjectsByUserId(){
    let userId = parseInt(localStorage.getItem("userId"));
    return this.service.getAllProjectByUserId(userId).subscribe(data=>{
      this.projects=data
      console.log(this.projects);
    });
  }
  x:number=this.projects.length;
  
}