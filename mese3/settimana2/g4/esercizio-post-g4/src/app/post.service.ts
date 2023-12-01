
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
      type:"news",
      author:"Mario Rossi"
    },

    {
      id:1,
      body:"lorem ipsum dolor sit amet, consectetur adipiscing aliquet et justo e euismod tempor",
      title:"Lorem Ipsum",
      active:true,
      type:"news",
      author:"Mario Rossi"
    },

    {
      id:2,
      body:"lorem ipsum dolor sit amet, consectetur adipiscing aliquet et justo e euismod tempor",
      title:"Lorem Ipsum",
      active:true,
      type:"politics",
      author:"Mario Rossi"
    },

    {
      id:3,
      body:"lorem ipsum dolor sit amet, consectetur adipiscing aliquet et justo e euismod tempor",
      title:"Lorem Ipsum",
      active:false,
      type:"politics",
      author:"Mario Rossi"
    },

    {
      id:4,
      body:"lorem ipsum dolor sit amet, consectetur adipiscing aliquet et justo e euismod tempor",
      title:"Lorem Ipsum",
      active:false,
      type:"education",
      author:"Mario Rossi"
    },

    {
      id:5,
      body:"lorem ipsum dolor sit amet, consectetur adipiscing aliquet et justo e euismod tempor",
      title:"Lorem Ipsum",
      active:false,
      type:"education",
      author:"Mario Rossi"
    },
    {
      id:6,
      body:"lorem ipsum dolor sit amet, consectetur adipiscing aliquet et justo e euismod tempor",
      title:"Lorem Ipsum",
      active:false,
      type:"education",
      author:"Mario Rossi"
    },
    {
      id:7,
      body:"lorem ipsum dolor sit amet, consectetur adipiscing aliquet et justo e euismod tempor",
      title:"Lorem Ipsum",
      active:false,
      type:"education",
      author:"Mario Rossi"
    }
  ];

  getById(id: number){
    return this.posts.find(p => p.id === id)
  }

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




