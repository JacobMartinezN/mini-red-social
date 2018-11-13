import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User ={
    nombre:"",
    correo:"",
    contrasenia:""
  }
  constructor( private _userService: UserService, private router:Router) { }

  ngOnInit() {
  }
  guardar(){
    console.log(this.user)
    this._userService.nuevoUsuario(this.user).subscribe(data => {
      this.router.navigate(['/dashboard', data['name']])
      

    },
    error => console.error(error))
    
  }

}
