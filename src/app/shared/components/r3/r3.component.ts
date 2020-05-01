import { Component, OnInit } from '@angular/core';
import { RidersService } from 'src/app/riders.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-r3',
  templateUrl: './r3.component.html',
  styleUrls: ['./r3.component.css']
})
export class R3Component implements OnInit {
  public model: number;
  events: any[];
  result = [];
  constructor(private _events: RidersService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.model = id;
    });

    this.result = [];
    this.events = this._events.getRidersDetails();
    console.log(this.events);
    if (this.events.length > 0) {
      for (let i = 0; i < this.events.length; i++) {
        if (this.events[i].modelid !== '') {
          if (this.events[i].modelid === this.model) {
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
