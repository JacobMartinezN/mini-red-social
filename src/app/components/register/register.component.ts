import { UserClass } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  
  public user:UserClass;

  constructor( private _userService: UserService, private router:Router) {
    this.user = new UserClass(null, 'Jacob', 'jacob@gmail.com', '12345678');
  }

  ngOnInit() {
    this._userService.signout()
  }

  register(){
    this._userService.register(this.user);
    this._userService.login(this.user);
    this.router.navigate(['/dashboard'])
    
  }

}
