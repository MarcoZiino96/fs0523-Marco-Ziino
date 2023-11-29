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
    this.posts = this.postSvc.filterActive();
  }
}
