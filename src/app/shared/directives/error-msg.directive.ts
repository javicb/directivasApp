import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private htmlElement: ElementRef<HTMLElement>;
  @Input() color = 'red';

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }


}
