import { Component, OnInit } from '@angular/core';
import { IPost} from '../../i-post';
import { PostService } from '../../postService';

@Component({
  selector: '.app-page-post-attivi',
  templateUrl: './page-post-attivi.component.html',
  styleUrl: './page-post-attivi.component.scss'
})
export class PagePostAttiviComponent implements OnInit {
   post:IPost[]=[];
   constructor(private postSvc:PostService){}

   ngOnInit(){
    this.post = this.postSvc.post.filterActive();
   }
}
