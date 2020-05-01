import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  models = [
    {"id": 1, "name": "R3", "img": 'assets/arts/R3a.jpg'},
    {"id": 2, "name": "R15","img": 'assets/arts/r15v3.jfif'},
    {"id": 3, "name": "MT15","img": 'assets/arts/mt15.jfif'},
    {"id": 4, "name": "FZ25","img": 'assets/arts/fz25.webp'},
    {"id": 5, "name": "FZ","img": 'assets/arts/fz.webp'}
  ]
  model: any;

  constructor(private router: Router) 
  {
  }
  ngOnInit() {
  } 

  onSelect(model: any)
  {
    this.router.navigate(['/events/model', model.id]);
  }

}

