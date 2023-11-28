
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
    "id":0,
    "body": "Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor lorem ipsum dolor",
    "title":"LOREM IPSUM",
    "active":true
  },
  {
    "id":0,
    "body": "Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor lorem ipsum dolor",
    "title":"LOREM IPSUM",
    "active":false
  },
  {
    "id":0,
    "body": "Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor lorem ipsum dolor",
    "title":"LOREM IPSUM",
    "active":false
  }
]
filterActive(){
  return this.post.filter(p=>p.active === true);
 }
filterInactive(){
  return this.post.filter(p=>p.active === false);
 }
}
