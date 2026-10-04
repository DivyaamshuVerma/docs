import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeenav',
  templateUrl: './employeenav.component.html',
  styleUrls: ['./employeenav.component.css']
})
export class EmployeenavComponent implements OnInit {
username:string=localStorage.getItem('username');
  constructor() { }

  ngOnInit(): void {
  }
logout(){

  localStorage.clear();
  

}
}