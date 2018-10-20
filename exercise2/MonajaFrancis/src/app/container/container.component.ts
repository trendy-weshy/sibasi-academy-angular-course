import { Component, OnInit } from '@angular/core';
import { ClicksService } from '../clicks.service';

@Component({
  selector: 'mfo-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  clickNumbers = 0
   constructor(private clickNumberService: ClicksService) { }
  ngOnInit() {
     

   }
    getClicks(){
      return this.clickNumberService.getClickNumber();
    }
    addClicks(){
     this.clickNumberService.addClick();
   }

   resetClick(){
    this.clickNumberService.resetClicks();
  }
}
