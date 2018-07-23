import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { FormButtonComponent } from './form-button/form-button.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { DynamicFieldDirective } from '../../directive/dynamic-field.directive';

@NgModule({
  imports: [
    CommonModule,
    // DynamicFieldDirective,
    ReactiveFormsModule
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent
  ],
  exports: [
    DynamicFormComponent
  ],
  // 我们需要在 @NgModule 配置对象的一个属性 - entryComponents 中，声明需动态加载的组件。
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent
  ]
})
export class DynamicFormModule { }
