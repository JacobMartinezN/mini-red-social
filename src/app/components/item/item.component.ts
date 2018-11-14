import { Item } from './../../models/item.model';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
  @Input('data') item:Item;
  constructor() { }
  
  ngOnInit() {
  }

}
