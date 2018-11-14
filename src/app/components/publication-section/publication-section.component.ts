import { Item } from './../../models/item.model';
import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';



@Component({
  selector: 'app-publication-section',
  templateUrl: './publication-section.component.html'
})
export class PublicationSectionComponent implements OnInit {
  
  public items:Item[]

  constructor( private _itemsService:ItemsService ) { 
    this._itemsService.getItems().subscribe( data => {
      console.log(data)
      this.items = data;
    })
  }
    
  ngOnInit() {
  }



}
