import { Auth } from './../../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-information-bar',
  templateUrl: './information-bar.component.html'
})
export class InformationBarComponent implements OnInit {

  public auth:Auth
  public name:string;
  constructor( private _userService:UserService ) { }

  ngOnInit() {
    this.auth = this._userService.getAuth()
    this.name = this.auth.name
  }
  
  
  
}
