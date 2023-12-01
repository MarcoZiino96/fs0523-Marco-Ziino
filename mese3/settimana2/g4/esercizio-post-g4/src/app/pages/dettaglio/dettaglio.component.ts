import { IlightDirective } from './../../ilight.directive';
import { Component } from '@angular/core';
import { IPost } from '../../ipost';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrl: './dettaglio.component.scss'
})
export class DettaglioComponent {

  post!:IPost

constructor(public route : ActivatedRoute,
            public postsvc:PostService
  ){}

ngOnInit(){
  this.route.params.subscribe((params:any) =>{
   console.log(this.postsvc.getById(params.id));
  })

}
}
