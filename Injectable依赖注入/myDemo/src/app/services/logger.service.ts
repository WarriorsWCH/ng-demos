import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor(private enable: boolean) { }

  log(message: string) {
    if (this.enable) {
       console.log(`LoggerService: ${message}`);
    }
}
}
