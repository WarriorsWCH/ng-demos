import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class MockHeroService {
  heros: Array<{ id: number; name: string }> = [
    { id: 16, name: 'Mock-RubberMan' },
    { id: 17, name: 'Mock-Dynama' },
    { id: 18, name: 'Mock-Dr IQ' },
    { id: 19, name: 'Mock-Magma' },
    { id: 20, name: 'Mock-Tornado' }
  ];

  constructor(private _loggerService: LoggerService) { }

  getHeros() {
    this._loggerService.log('Fetching heros...');
      return this.heros;
  }
}
