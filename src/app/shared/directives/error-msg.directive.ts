import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  constructor() {
    console.log('constructor direciva');
  }

  ngOnInit(): void {
    console.log('oniniti direciva');
  }


}
