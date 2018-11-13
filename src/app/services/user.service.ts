import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { User} from '../interfaces/user.interface';
import { map }  from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL:string = "https://socialred-4e146.firebaseio.com/user.json"

  constructor( private http:Http ) { }

  nuevoUsuario( user:User){
    let body = JSON.stringify(user)
    let headers = new Headers({
      'Content-Type':'application/json'
    })

    return this.http.post( this.userURL, body, {headers}).pipe(map( res => {
      console.log(res.json())
      return res.json()
    }))
  }
}
