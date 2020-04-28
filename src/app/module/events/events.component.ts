import { Component, OnInit } from '@angular/core';
import { RidersService } from 'src/app/riders.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  events: any[];
  constructor(private _events: RidersService) {
  }
  ngOnInit() {
    this.events = this._events.getRidersDetails();
  }
}


