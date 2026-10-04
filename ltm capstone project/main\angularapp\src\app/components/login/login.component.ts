import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
 
  constructor(private authService:AuthService, private builder:FormBuilder, private rt:Router) { 
    this.loginForm = builder.group({
      email: builder.control("", [Validators.required,Validators.email]),
      password: builder.control("", Validators.required)
    });
  }
 
  ngOnInit(): void {
  }
 
  public loginUser(){
    this.authService.loginUser(this.loginForm.value).subscribe(data => {

      console.log("data------->"+JSON.stringify(data))
      
      localStorage.setItem("email", data.email);
      localStorage.setItem("role", data.role);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("username",data.username);
      console.log("user id ----------------------->",data.userId)
      this.rt.navigate(['/home']);
    })
  }
 
 
}