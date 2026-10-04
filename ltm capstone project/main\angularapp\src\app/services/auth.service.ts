import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  
  backendUrl = environment.backendUrl;
 
  constructor(private http:HttpClient) { }
 
  public registerUser(user:User):Observable<any>{
    return this.http.post(this.backendUrl + "/register", user);
  }
 
  public loginUser(user:User):Observable<any>{
    return this.http.post(this.backendUrl + "/login", user);
  }
 
}
 