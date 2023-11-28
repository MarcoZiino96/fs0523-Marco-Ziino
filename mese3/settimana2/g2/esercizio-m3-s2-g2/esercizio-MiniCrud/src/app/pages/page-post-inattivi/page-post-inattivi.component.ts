import { Component, OnInit } from '@angular/core';
import { IPost} from '../../i-post';
import { PostService } from '../../postService';

@Component({
  selector: 'app-page-post-inattivi',
  templateUrl: './page-post-inattivi.component.html',
  styleUrl: './page-post-inattivi.component.scss'
})
export class PagePostInattiviComponent implements OnInit {

  post:IPost[]=[];
  constructor(private postSvc:PostService){}

  ngOnInit(){
   this.post = this.postSvc.filterInactive()
  }



}
