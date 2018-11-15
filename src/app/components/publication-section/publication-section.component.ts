import { LikeService } from './../../services/like.service';
import { UserService } from './../../services/user.service';
import { Item } from './../../models/item.model';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { log } from 'util';



@Component({
  selector: 'app-publication-section',
  templateUrl: './publication-section.component.html'
})
export class PublicationSectionComponent implements OnInit, OnChanges {

  public items:any[] = []
  @Input() update:boolean = false;
  @Output() changeS:EventEmitter<boolean> = new EventEmitter<boolean>(); 

  constructor( private _itemsService:ItemsService , private userService:UserService, private likeService:LikeService) { }
    
  ngOnInit() {
    this.getItems();
  }

  ngOnChanges(){
    this.getItems();
  }

  getItems(){
    this._itemsService.getItems().subscribe( data => {
      this.items = [];
      this.items= new Array();
      for( let key$ in data ){
        let h = data[key$];
        h.keys$= key$;
        this.items.push(data[key$]);
      }
      this.update = false;
      this.changeS.emit(false);
    })
  }

  remove(key:string){
    this._itemsService.deleteItem(key).subscribe( res => {
      this.likeService.deleteItemsLike(key);
      this.getItems();
    })
  }

  updateList(key:any){
    if(key!=null){
      this.remove(key);
    }
    else{
      this.getItems();
    }
  }

}
