import { Component, OnInit } from '@angular/core';
import { IPost } from '../../ipost';
import { PostService } from '../../post.service';

@Component({
  selector: '.app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss'
})
export class ActiveComponent implements OnInit {

  posts:IPost[] = [];
  constructor(private postSvc:PostService){}
  ngOnInit(){
   this.upDataPost();
  }

  upDataPost(){
    this.posts = this.postSvc.filterActive();
  }
  toggleStatus(post:IPost){
    this.postSvc.toggleActiveMap(post);
    this.upDataPost();
  }
}
