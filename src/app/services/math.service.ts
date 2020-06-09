import { Injectable } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }
  score:number[]=[1,2]
  message:string="Angular services are running";

  getMessage(){
    return this.message;
  }

  getScore(){
    return this.score;
  }
}
