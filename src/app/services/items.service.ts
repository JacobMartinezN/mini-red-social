import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Item } from '../models/item.model';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  itemsUrl="https://socialred-4e146.firebaseio.com/items.json"
  itemUrl="https://socialred-4e146.firebaseio.com/items/"

  constructor( private http:Http ) { }

  registerItem( item:Item ){
    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type':'application/json'
    });
  
    return this.http.post( this.itemsUrl, body, {headers}).pipe(map( res => {
      return res.json()
    }))
  }

  updateItem( item:Item, key$:string ){
    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let url = `${this.itemUrl}/${key$}.json`
    return this.http.put( url, body, {headers}).pipe(map( res => {
      return res.json()
    }))
  }

  getItem( key$:string){
    let url = `${this.itemUrl}/${key$}.json`;
    return this.http.get(url).pipe(map( res => res.json()))
  }

  getItems(){
    return this.http.get(this.itemsUrl).pipe(map( res => res.json()))
  }
}

