import { Directive, ElementRef, HostListener } from '@angular/core';

//ng generate directive highlight

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') highLight(){
    this.element.nativeElement.style.backgroundColor = "red";
  }

  @HostListener('mouseleave') cancelhighLight(){
    this.element.nativeElement.style.backgroundColor = null;
  }

}
