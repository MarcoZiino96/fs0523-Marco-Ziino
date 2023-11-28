
import { Injectable } from '@angular/core';
import { IPost} from './i-post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

post:IPost[]=[

  {
    "id":0,
    "body": "Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor lorem ipsum dolor",
    "title":"LOREM IPSUM",
    "active":true
  },
  {
    "id":1,
    "body": "Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor lorem ipsum dolor",
    "title":"LOREM IPSUM",
    "active":true
  },
  {
    "id":2,
    "body": " Sono inattivo Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor lorem ipsum dolor",
    "title":"LOREM IPSUM",
    "active":false
  },
  {
    "id":3,
    "body": " Sono inattivo Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor lorem ipsum dolor",
    "title":"LOREM IPSUM",
    "active":false
  }
]
filterActive():IPost[] {
  return this.post.filter(p=>p.active === true);
 }
filterInactive():IPost[]{
  return this.post.filter(p=>p.active === false);
 }
}
