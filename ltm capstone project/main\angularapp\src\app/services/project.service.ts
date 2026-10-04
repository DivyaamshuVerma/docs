import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  backendUrl=environment.backendUrl+"/projects";
  constructor(private http:HttpClient) { }
  
 public getAllProject():Observable<any>{
  return this.http.get<any>(this.backendUrl);
 }
 public getAllProjectByUserId(userId:number):Observable<any>{
  return this.http.get(this.backendUrl+"/user/"+userId);
 }
 public getProjectById(projectId:number):Observable<any>{
  return this.http.get(this.backendUrl+"/"+projectId);
 }

 public addProject(project:Project):Observable<any>{
  return this.http.post(this.backendUrl,project);
 }
 public updateProject(projectId:number,project:Project):Observable<any>{
  return this.http.put(this.backendUrl+"/"+projectId,project);
 }

  public deleteProject(projectId:number):Observable<any>{
    return this.http.delete(this.backendUrl+"/"+projectId);
  }
  public getAllUser():Observable<any>{
    return this.http.get(this.backendUrl + "/user");
  }
}