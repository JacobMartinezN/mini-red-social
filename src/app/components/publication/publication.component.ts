import { NgForm } from '@angular/forms';
import { ItemsService } from './../../services/items.service';
import { Item } from './../../models/item.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html'
})
export class PublicationComponent implements OnInit {

  public item:Item = {
    id: "",
    content: "",
    likes: 0

  }
  constructor( private _itemsService: ItemsService) { }

  ngOnInit() {
    
  }

  saveItem(){
    console.log(this.item)
    this._itemsService.registerItem(this.item).subscribe(data => {
      console.log(data.name)
      this._itemsService.getItems()
    }, error => console.error(error));
    
  }

}
