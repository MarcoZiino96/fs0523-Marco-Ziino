import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIlight]'
})
export class IlightDirective {

  constructor(
    private ref:ElementRef
    ) {}

    ngOnInith(){
      this.ref.nativeElement.style.backgroundColor = "green";
    }

}
