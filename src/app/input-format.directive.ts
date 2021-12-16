import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format: string = "";

  constructor(private el: ElementRef) { 
  }

  @HostListener('blur') onBlur(){
    //console.log('On Blur');
    let val : string = this.el.nativeElement.value;

    if(this.format == "lowercase")
      this.el.nativeElement.value = val.toLowerCase();
    else
      this.el.nativeElement.value = val.toUpperCase();
  }


}
