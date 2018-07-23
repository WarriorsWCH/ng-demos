import { Directive, HostBinding, Input, HostListener, Attribute } from '@angular/core';

@Directive({
  selector: '[appGreet]'
})
export class GreetDirective {

  // @HostBinding() innerText = '指令测试';

  @Input() appGreet: string;
  @HostBinding() get innerText() {
      return this.appGreet;
  }
  @HostListener('click', ['$event'])
    onClick(event) {
      this.appGreet = 'Clicked!' + this.author;
   }
  constructor(@Attribute('author') public author: string) { }

}
