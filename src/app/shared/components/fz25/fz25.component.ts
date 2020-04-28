import { Component, OnInit } from '@angular/core';
import { RidersService } from 'src/app/riders.service';

@Component({
  selector: 'app-fz25',
  templateUrl: './fz25.component.html',
  styleUrls: ['./fz25.component.css']
})
export class Fz25Component implements OnInit {
  events: any[];
  result = [];
  constructor(private _events: RidersService) {

  }

  ngOnInit() {
    this.result = [];
    this.events = this._events.getRidersDetails();
    console.log(this.events);
    if (this.events.length > 0) {
      for (let i = 0; i < this.events.length; i++) {
        if (this.events[i].model !== '') {
          if (this.events[i].model.includes('FZ25')) {
            const bk = {
              name: this.events[i].name,
              age: this.events[i].age,
              bike: this.events[i].bike,
              model: this.events[i].model
            };
            this.result.push(bk);
          }
        }
      }
    }
    console.log(this.result);
  }
}
