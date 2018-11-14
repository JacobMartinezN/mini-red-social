import { UserService } from './../../services/user.service';
import { Auth } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public auth:Auth;
  public found:boolean = true;

  constructor(private _userService:UserService) {
    this.auth = new Auth('jacob@gmail.com', '12345678');
  }

  ngOnInit() {
  }

  signin(){
    this.found = this._userService.login(this.auth);
    console.log(this.found)
  }



}
