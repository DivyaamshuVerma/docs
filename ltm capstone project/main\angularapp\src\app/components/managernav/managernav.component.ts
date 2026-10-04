import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managernav',
  templateUrl: './managernav.component.html',
  styleUrls: ['./managernav.component.css']
})
export class ManagernavComponent implements OnInit {
  username:string=localStorage.getItem('username');
  constructor() { }

  ngOnInit(): void {
  }
  logout(){

    localStorage.clear();
  }
}