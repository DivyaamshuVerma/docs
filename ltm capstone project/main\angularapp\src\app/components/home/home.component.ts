import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
role:string;
username:string=localStorage.getItem('username');
  constructor() { }

  ngOnInit(): void {
    this.role=localStorage.getItem("role")
    console.log(this.role);
  }

}