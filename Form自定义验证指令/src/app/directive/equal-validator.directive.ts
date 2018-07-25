import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  // selector: '[appEqualValidator]'
  // tslint:disable-next-line:directive-selector
  selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
    providers: [
        {
          provide: NG_VALIDATORS,
          useExisting: forwardRef(() => EqualValidatorDirective),
          multi: true
        }
    ]
})
export class EqualValidatorDirective implements Validator {

  // 该接口要求定义一个 validate() 方法，因此我们的 `EqualValidatorDirective 类中就需要实现 Validator 接口中定义的 validate 方法。
  // 此外在构造函数中，我们通过 @Attribute('validateEqual') 装饰器来获取 validateEqual 属性上设置的值。
  constructor(@Attribute('validateEqual') public validateEqual: string,
  @Attribute('reverse') public reverse: string) { }

  private get isReverse() {
    if (!this.reverse) {
      return false;
    }
    return this.reverse === 'true';
  }

  validate(c: AbstractControl): { [key: string]: any } {
      // self value (e.g. retype password)
      const v = c.value; // 获取应用该指令，控件上的值

      // control value (e.g. password)
      const e = c.root.get(this.validateEqual); // 获取进行值比对的控件
      console.log(e, v, this.isReverse);
      // value not equal
      // 未设置reverse的值或值为false
      if (e && v !== e.value && !this.isReverse) {
        return {
            validateEqual: false
        };
      }

      // value equal and reverse
      // 若值相等且reverse的值为true，则删除validateEqual异常信息
      if (e && v === e.value && this.isReverse) {
          delete e.errors['validateEqual'];
          if (!Object.keys(e.errors).length) {
            e.setErrors(null);
          }
      }

      // value not equal and reverse
      // 若值不相等且reverse的值为true，则把异常信息添加到比对的目标控件上
      if (e && v !== e.value && this.isReverse) {
          e.setErrors({ validateEqual: false });
      }
      return null;
  }
}
