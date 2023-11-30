import { IlightDirective } from './../../ilight.directive';
import { Component } from '@angular/core';
import { IPost } from '../../ipost';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrl: './dettaglio.component.scss'
})
export class DettaglioComponent {

  post!:IPost

constructor(public route : ActivatedRoute){}
ngOnInit(){
  this.route.params.subscribe((params:any) =>{
    params.id
  })
}
}
