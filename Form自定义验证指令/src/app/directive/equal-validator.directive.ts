import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  // selector: '[appEqualValidator]'
  selector: '[appEqualValidator][formControlName],[appEqualValidator][formControl],[appEqualValidator][ngModel]',
    providers: [
        {
          provide: NG_VALIDATORS,
          useExisting: forwardRef(() => EqualValidatorDirective),
          multi: true
        }
    ]
})
export class EqualValidatorDirective implements Validator {

  constructor(@Attribute('validateEqual') public validateEqual: string) { }

  validate(c: AbstractControl): { [key: string]: any } {
      // self value (e.g. retype password)
      const v = c.value; // 获取应用该指令，控件上的值

      // control value (e.g. password)
      const e = c.root.get(this.validateEqual); // 获取进行值比对的控件

      // value not equal
      if (e && v !== e.value) {
       return {
          validateEqual: false
       };
      }
      return null;
  }
}
