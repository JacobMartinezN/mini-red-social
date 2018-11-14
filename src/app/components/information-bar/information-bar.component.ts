import { User } from './../../interfaces/user.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-information-bar',
  templateUrl: './information-bar.component.html'
})
export class InformationBarComponent implements OnInit {

  user:User = {
    nombre:"",
    correo:"",
    contrasenia:""
  }

  id:string;
  constructor( private _userService:UserService, private router: Router, private route:ActivatedRoute ) {
    this.route.params.subscribe( parametros => {
      this.id = parametros['id']
      console.log(this.id)
      
    })
   }

  ngOnInit() {
  }



}
