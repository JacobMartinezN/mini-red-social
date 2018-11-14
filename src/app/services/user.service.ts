import { UserClass, Auth } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:Http ) { }

  getUsers(){
    let users:UserClass[];
    if(localStorage.getItem('accounts') != null) {
      users = JSON.parse(localStorage.getItem('accounts'));
    }
    return users;
  }

  register(userToRegister:UserClass){
    let users:UserClass[] = this.getUsers();
    if(users!=null && users.length>0){
      users.push(userToRegister);
    }
    else {
      users = new Array();
      users.push(userToRegister);
    }
    localStorage.setItem('accounts', JSON.stringify(users));
  }

  login(auth:Auth){
    let ok:boolean = false;
    let users:UserClass[] = this.getUsers();
    if(users!=null && users.length>0){
      users.forEach((user)=> {
        if(user.email == auth.email && user.password == auth.password){
          localStorage.setItem('user-auth', JSON.stringify(user));
          ok = true;
          return;
        }
      });
    }
    return ok;
  }

  signout(){
    localStorage.removeItem('user-auth');
  }

  getAuth(){
    let user = null;
    if(localStorage.getItem('user-auth')){
      user = JSON.parse(localStorage.getItem('user-auth'));
    }
    return user;
  }
}
