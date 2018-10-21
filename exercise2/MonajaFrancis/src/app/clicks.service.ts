import { Injectable } from '@angular/core';

@Injectable()
export class ClicksService {
  clickNumber = 0;
  constructor() { }

  addClick(){
    return this.clickNumber++;
  }
  getClickNumber(){
    return this.clickNumber;
  }
  resetClicks(){
    this.clickNumber = 0;
  }
}
