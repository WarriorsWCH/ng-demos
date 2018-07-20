import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GreetDirective } from './directive/greet.directive';
import { ExeUnlessDirective } from './directive/exe-unless.directive';


@NgModule({
  declarations: [
    AppComponent,
    GreetDirective,
    ExeUnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
