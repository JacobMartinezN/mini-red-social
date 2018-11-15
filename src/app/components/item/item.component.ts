import { LikeService } from './../../services/like.service';
import { ItemsService } from './../../services/items.service';
import { UserService } from './../../services/user.service';
import { Item } from './../../models/item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
  @Input('data') item:any;
  @Output() updateList:EventEmitter<any> = new EventEmitter<any>();
  public isEdit:boolean = false;
  public isLiked:boolean = false;
  public owner:string;
  constructor(private _userService:UserService, private _itemsService:ItemsService, private _likeService:LikeService) { }
  
  ngOnInit() {
    this.owner = this._userService.getAuth().email;
    this.isLiked = this._likeService.userLiked(this.item.keys$);
  }

  toEdit(){
    this.isEdit = !this.isEdit;
  }

  update(){
    console.log(this.item);
    this._itemsService.updateItem(this.item, this.item.keys$).subscribe((res:any)=>{
      if(res){
        this.isEdit = false;
        this.updateList.emit(null);
      }
    });
  }

  like(){
    if(!this.isLiked){
        this.item.likes += 1;
        this._itemsService.updateItem(this.item, this.item.keys$).subscribe((res:any)=>{
        if(res){
          this._likeService.saveLike(this.item.keys$);
          this.isEdit = false;
          this.updateList.emit(null);
        }
      });
    }
    
  }
 
  delete(){
    this.updateList.emit(this.item.keys$);
  }
 
}
