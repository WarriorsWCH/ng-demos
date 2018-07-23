import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormButtonComponent } from '../components/dynamic-form/form-button/form-button.component';
import { FormInputComponent } from '../components/dynamic-form/form-input/form-input.component';
import { FormSelectComponent } from '../components/dynamic-form/form-select/form-select.component';

const components = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent
};

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() config: Object;

  @Input() group: FormGroup;

  component: any;
  // 动态渲染组件，我们需要用到 ComponentFactoryResolver 和 ViewContainerRef 两个对象。
  // ComponentFactoryResolver 对象用于创建对应类型的组件工厂 (ComponentFactory)，
  // 而 ViewContainerRef 对象用于表示一个视图容器，可添加一个或多个视图，通过它我们可以方便地创建和管理内嵌视图或组件视图。
  constructor(private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef) { }

  ngOnInit() {
    const component = components[this.config['type']];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;  }
}
