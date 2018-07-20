import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  // providers: [HeroService] // 注入providers
})
export class HeroComponent implements OnInit {

  heros: Array<{id: number; name: string}>;

  constructor(private _heroService: HeroService,
    private _loggerService: LoggerService) { }

  ngOnInit() {
    // this.heros = [
    //   { id: 11, name: 'Mr. Nice' },
    //   { id: 12, name: 'Narco' },
    //   { id: 13, name: 'Bombasto' },
    //   { id: 14, name: 'Celeritas' },
    //   { id: 15, name: 'Magneta' }
    // ];
    this._heroService.getHeros().subscribe(res => {
      this.heros = res.heros;
      this._loggerService.log(res.heros[0].name);
    });
  }

}
