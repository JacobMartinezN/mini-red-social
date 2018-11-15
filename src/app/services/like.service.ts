import { UserService } from './user.service';
import { Like } from './../models/like.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private userService:UserService) { }

  getAllLikes(){
    let likes:Like[] = [];
    if(localStorage.getItem('likes')){
      likes = JSON.parse(localStorage.getItem('likes'));
    }
    else{
      likes = null;
    }
    return likes;
  }

  userLiked(publication:string){
    let liked = false;
    if(localStorage.getItem('likes')){
      let likes:Like[] = JSON.parse(localStorage.getItem('likes'));
      likes.forEach((like)=>{
        
        if(like.user == this.userService.getAuth().email && like.publication == publication){
          liked = true;
          return;
        }
      });
    }
    return liked;
  }

  saveLike(publication: string){
    let like:Like = new Like(publication, this.userService.getAuth().email);
    if(this.getAllLikes()){
      let likes = this.getAllLikes();
      let candAdd = true;
      likes.forEach((lk)=>{
        if(lk.publication== publication && lk.user==this.userService.getAuth().email){
          candAdd = false;
        }
      });
      if(candAdd) { likes.push(like);}
      localStorage.setItem('likes', JSON.stringify(likes));
    }
    else{
      let likes = new Array();
      likes.push(like);
      localStorage.setItem('likes', JSON.stringify(likes));
    }
  }

  deleteItemsLike(publication:string){
    if(this.getAllLikes()){
      let likes = this.getAllLikes();
      likes.forEach((lk)=>{
        if(lk.publication == publication){
          //likes.splice(idx);
          likes = likes.filter(i=> i!= lk);
        }
      });
      localStorage.setItem('likes', JSON.stringify(likes));
    }
  }
}
/*
elemToDelete = 4;
arr = [1,2,3,4,5,6,7,8,9];

arr = arr.filter(i=> i!=elemToDelete);

mi nuevo arr: [1,2,3,5,6,7,8,9];
*/