import { Injectable } from '@angular/core';
import { IPost } from './ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:IPost[] = [

    {
      id:0,
      body:"lorem ipsum dolor sit amet, consectetur adipiscing aliquet et justo e euismod tempor",
      title:"Lorem Ipsum",
      active:true,
      type:"news"
    },

    {
      id:1,
      body:"lorem ipsum dolor sit amet, consectetur adipiscing aliquet et justo e euismod tempor",
      title:"Lorem Ipsum",
      active:true,
      type:"news"
    },

    {
      id:2,
      body:"lorem ipsum dolor sit amet, consectetur adipiscing aliquet et justo e euismod tempor",
      title:"Lorem Ipsum",
      active:true,
      type:"politics"
    },

    {
      id:3,
      body:"lorem ipsum dolor sit amet, consectetur adipiscing aliquet et justo e euismod tempor",
      title:"Lorem Ipsum",
      active:false,
      type:"politics"
    },

    {
      id:4,
      body:"lorem ipsum dolor sit amet, consectetur adipiscing aliquet et justo e euismod tempor",
      title:"Lorem Ipsum",
      active:false,
      type:"education"
    },

    {
      id:5,
      body:"lorem ipsum dolor sit amet, consectetur adipiscing aliquet et justo e euismod tempor",
      title:"Lorem Ipsum",
      active:false,
      type:"education"
    },
    {
      id:6,
      body:"lorem ipsum dolor sit amet, consectetur adipiscing aliquet et justo e euismod tempor",
      title:"Lorem Ipsum",
      active:false,
      type:"education"
    },
    {
      id:7,
      body:"lorem ipsum dolor sit amet, consectetur adipiscing aliquet et justo e euismod tempor",
      title:"Lorem Ipsum",
      active:false,
      type:"education"
    }
  ];
  filterActive():IPost[]{
    return this.posts.filter(p=>p.active);
   }
  filterInactive():IPost[]{
    return this.posts.filter(p=>!p.active);
   }

  toggleActiveMap(post:IPost){
    this.posts = this.posts.map(p=>{
      if(p.id == post.id) p.active = !p.active;
      return p;
    })
  }
}




