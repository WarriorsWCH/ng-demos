import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appExeUnless]'
})
export class ExeUnlessDirective {

  @Input('appExeUnless')
  set condition(newCondition: boolean) {
      if (!newCondition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
          this.viewContainer.clear();
      }
  }

  constructor(private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef) {
  }
  /*
    TemplateRef：用于表示内嵌的 template 模板元素，通过 TemplateRef 实例，
    我们可以方便创建内嵌视图(Embedded Views)，且可以轻松地访问到通过 ElementRef 封装后的 nativeElement。
    需要注意的是组件视图中的 template 模板元素，经过渲染后会被替换成 comment 元素。

    ViewContainerRef：用于表示一个视图容器，可添加一个或多个视图。
    通ViewContainerRef 实例，我们可以基于 TemplateRef 实例创建内嵌视图，
    并能指定内嵌视图的插入位置，也可以方便对视图容器中已有的视图进行管理。
    简而言之，ViewContainerRef 的主要作用是创建和管理内嵌视图或组件视图。
  */

}
