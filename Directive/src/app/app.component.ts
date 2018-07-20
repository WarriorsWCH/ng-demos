import { Component, AfterViewInit, ViewContainerRef, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('tpl') tplRef: TemplateRef<any>;

  context = { message: 'Hello ngOutletContext!', $implicit: 'Hello, Angular6!' };

  condition = false;

  constructor(private viewContainer: ViewContainerRef) {}

  ngAfterViewInit() {
    this.viewContainer.createEmbeddedView(this.tplRef);
  }
}
