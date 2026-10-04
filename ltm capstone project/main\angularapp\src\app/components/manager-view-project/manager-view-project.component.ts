import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manager-view-project',
  templateUrl: './manager-view-project.component.html',
  styleUrls: ['./manager-view-project.component.css']
})
export class ManagerViewProjectComponent implements OnInit{

  searchTerm: string = '';
  projects:Project[]=[];

  constructor( private projectService:ProjectService){}
  
  ngOnInit(){
    
  this.getAllProjects();
  }
  searchTitle:string='';
  searchProject(){
    if(this.searchTitle.trim().length!=0){
      this.projects=this.projects.filter(p=>{
        return p.projectTitle.toLowerCase().includes(this.searchTitle.toLowerCase());
      })
    }else{
      this.getAllProjects();
    }
  }
getAllProjects(){
  this.projectService.getAllProject().subscribe(data=>{
    this.projects=data;
    console.log(this.projects);
  })
}
  deleteProject(projectId: number) {
    this.projectService.deleteProject(projectId).subscribe(data=>{
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
     this.getAllProjects();
    })
  }
  user
  userEmp
  getAllUser(){
    this.projectService.getAllUser().subscribe(data=>{
      this.user=data;
      this.userEmp = this.user.filter(user => user.role === "Employee").map(user => user.username);
      console.log(this.userEmp);
    })
  }
}