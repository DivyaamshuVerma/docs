import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { User } from 'src/app/models/user.model';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mananger-assign-project',
  templateUrl: './mananger-assign-project.component.html',
  styleUrls: ['./mananger-assign-project.component.css']
})
export class ManangerAssignProjectComponent implements OnInit {
    searchTerm: string = '';
    projects:Project[]=[];
    user : User[] = [] ;
    userEmp : User[] = [] ;
    userid:number = null ;
  
    constructor( private projectService:ProjectService){}
    
    ngOnInit(){
      this.getAllProjects();
      this.getAllUser();
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
      // console.log(this.projects);
    })
  }

    getAllUser(){
      this.projectService.getAllUser().subscribe(data=>{
        this.user=data;
        console.log(this.user);
        this.userEmp = this.user.filter(user => user.role === 'Employee');
        console.log(this.userEmp);

      })
    }

    editproject(userid:number,project:Project)
    {
      project.user={userId:userid};
      console.log(userid);
      console.log(project.user?.userId);
      project.status = "Assigned";
      this.projectService.updateProject(project.projectId,project).subscribe(data=>{
        userid = null ;
        this.getAllProjects();
        // console.log(this.getAllProjects());
        Swal.fire({
          title: "Great",
          text: "Project Assigned Successfully",
          icon: "success"
        });
      })
    }
    editReproject(userid:number,project:Project){
      project.user=null;
      console.log(userid);
      console.log(project.user?.userId);
      project.status = "Pending";
      this.projectService.updateProject(project.projectId,project).subscribe(data=>{
        userid = null ;
       
        Swal.fire({
          title: "Great",
          text: "Project Released Successfully",
          icon: "success"
        });
        
      })
     
      // this.getAllUser();
    }
  }

