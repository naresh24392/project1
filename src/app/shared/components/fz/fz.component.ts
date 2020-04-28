import { Component, OnInit } from '@angular/core';
import { RidersService } from 'src/app/riders.service';

@Component({
  selector: 'app-fz',
  templateUrl: './fz.component.html',
  styleUrls: ['./fz.component.css']
})
export class FzComponent implements OnInit {
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
          if (this.events[i].model === 'FZ') {
            const bk = {
              name: this.events[i].name,
              age: this.events[i].age,
              bike: this.events[i].bike,
              model: this.events[i].model,
              img: this.events[i].img
            };
            this.result.push(bk);
          }
        }
      }
    }
    console.log(this.result);
  }
}
