import { Auth } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  
  public upub:boolean;
  constructor() { }

  ngOnInit() {
  }

  updatePublications(){
    this.upub = true;
  }

  changeStatus(any:any){
    this.upub = false;
  }
}
