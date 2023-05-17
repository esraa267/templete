import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective implements OnInit {

  constructor(private elementRef:ElementRef) { }
    ngOnInit(): void {
       this.elementRef.nativeElement
    }


}
