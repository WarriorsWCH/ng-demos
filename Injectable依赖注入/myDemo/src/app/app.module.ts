import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroService } from './services/hero.service';
import { MockHeroService } from './services/mock-hero.service';
import { LoggerService } from './services/logger.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { THIRD_PARTY_PROVIDERS } from './services/third-party';
import { API_URL } from './services/app.token';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [
    HeroService, // 方式一
    // { provide: HeroService, useClass: HeroService } // 方式一更加简洁，方式二是采用标准的语法
    // { provide: HeroService, useClass: MockHeroService },
    {
      provide: LoggerService,
      useFactory: () => {
        return new LoggerService(true);
      }
    },
    {
      provide: API_URL,
      useValue: 'http://localhost:4200/heros'
    },
    THIRD_PARTY_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
