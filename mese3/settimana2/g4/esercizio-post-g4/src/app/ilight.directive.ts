import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appIlight]'
})
export class IlightDirective implements OnInit {

  constructor(
    private ref:ElementRef
    ) {}


    ngOnInit(){
      this.ref.nativeElement.style.backgroundColor ="lightgreen";
    }

}
