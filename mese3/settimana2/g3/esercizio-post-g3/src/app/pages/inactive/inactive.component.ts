import { Component, OnInit } from '@angular/core';
import { IPost } from '../../ipost';
import { PostService } from '../../post.service';

@Component({
  selector: '.app-inactive',
  templateUrl: './inactive.component.html',
  styleUrl: './inactive.component.scss'
})
export class InactiveComponent implements OnInit {

  posts:IPost[] = [];

  constructor(private postSvs:PostService){}
  ngOnInit(){
    this.posts = this.postSvs.filterInactive()
  }

}
