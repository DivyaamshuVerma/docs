import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectProposal } from '../models/projectProposal.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectProposalService {
backendUrl=environment.backendUrl+"/projectproposals";
  constructor(private http:HttpClient) { }

  public getAllProjectProposals():Observable<ProjectProposal[]>{
    return this.http.get<ProjectProposal[]>(this.backendUrl);
  }

  public getProjectProposalById(proposalId:number):Observable<ProjectProposal>{
    return this.http.get<ProjectProposal>(this.backendUrl+proposalId);
  }

  public getProjectProposalsByUserId(userId:string):Observable<any>{
    return this.http.get<any>(this.backendUrl+"/user/"+userId);
  }

  public addProjectProposal(projectProposal:ProjectProposal):Observable<any>{
    return this.http.post(this.backendUrl,projectProposal);
  }


  public updateProjectProposal(proposalId:number,projectProposal:ProjectProposal):Observable<any>{
    return this.http.put(this.backendUrl+"/"+ proposalId,projectProposal);
  }

  public deleteProjectProposal(proposalId:number):Observable<any>{
    return this.http.delete(this.backendUrl+"/"+proposalId);
  }
}