import { UserService } from './../../services/user.service';
import { NgForm } from '@angular/forms';
import { ItemsService } from './../../services/items.service';
import { Item } from './../../models/item.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html'
})
export class PublicationComponent implements OnInit {

  @Output() up : EventEmitter<boolean> = new EventEmitter<boolean>();

  public item:Item = {
    id: "",
    content: "",
    likes: 0,
    email: "",
    owner:""

  }
  constructor( private _itemsService: ItemsService, private _userService:UserService) { }

  ngOnInit() {
    
  }

  saveItem(){
    console.log(this.item)
    this.item.email = this._userService.getAuth().email;
    this.item.owner = this._userService.getAuth().name;
    this._itemsService.registerItem(this.item).subscribe(data => {
      console.log(data.name)
      this.up.emit(true);
    }, error => console.error(error));
    
  }

}
