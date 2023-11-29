import { Component, Input } from '@angular/core';
import { IPost } from '../ipost';

@Component({
  selector: '.app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  @Input() post!:IPost;
  getClassObj(){
    return{
    'bg-warning':this.post.type == 'news',
    'bg-black':this.post.type == 'politics',
    'text-white':this.post.type == 'politics',
    'bg-primary':this.post.type == 'education'
}
  }
}
