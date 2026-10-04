import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  backendUrl=environment.backendUrl+"/feedback";
  constructor(private http:HttpClient) { }


   public sendFeedback(feedback:Feedback):Observable<any>
   {
    return this.http.post(this.backendUrl,feedback);
   }

   public getAllFeedbacksByUserId(userId:string):Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.backendUrl+userId);
   }

   public deleteFeedback(feedbackId:number):Observable<any>{
    return this.http.delete(this.backendUrl+"/"+feedbackId);
   }

   public getFeedbacks():Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.backendUrl);
   }
}