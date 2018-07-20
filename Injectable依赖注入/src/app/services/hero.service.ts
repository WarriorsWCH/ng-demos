import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LoggerService } from './logger.service';
import { API_URL } from './app.token';

@Injectable()
export class HeroService {

  heros: Array<{ id: number; name: string }> = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' }
  ];

  // apiUrl = 'http://localhost:4200/heros';

  constructor(private _loggerService: LoggerService,
    private _http: Http,
    @Inject(API_URL) private apiUrl) { }

  // getHeros() {
  //   return this.heros;
  // }
  getHeros(): Observable<any> {
    this._loggerService.log('Fetching heros...');
    return this._http.get(this.apiUrl)
        .map(res => res.json());
  }
}
