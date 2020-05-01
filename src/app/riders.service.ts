import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RidersService {


  constructor() { }
  getRidersDetails ()
  {

    return [ {
      "name": "NARESH",
      "age": 28,
      "bike": 'FAZER 15',
      "model": 'FZ',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 5
    },
    {
      "name": "SNEYAL",
      "age": 21,
      "bike": 'R3',
      "model": 'R3',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 1
    },
    {
      "name": "JOHN",
      "age": 26,
      "bike": 'FAZER 25',
      "model": 'FZ25',
      "img": 'assets/arts/john.jpg',
      "modelid": 4
    },
    {
      "name": "PREM",
      "age": 27,
      "bike": 'R15 V3',
      "model": 'R15',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 2
    },
    {
      "name": "C-RUN",
      "age": 28,
      "bike": 'R15 V3',
      "model": 'R15',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 2

    },
    {
      "name": "JINCY",
      "age": 28,
      "bike": 'R3',
      "model": 'R3',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 1

    },
    {
      "name": "PETER",
      "age": 28,
      "bike": 'FZ15',
      "model": 'FZ',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 5
    },
    {
      "name": "ABISHEK",
      "age": 26,
      "bike": 'FZ25',
      "model": 'FZ25',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 4
    },
    {
      "name": "ABU",
      "age": 20,
      "bike": 'MT15',
      "model": 'MT',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 3
    },
    {
      "name": "RISHI",
      "age": 20,
      "bike": 'MT15',
      "model": 'MT',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 3
    },
    {
      "name": "VIGNESH",
      "age": 20,
      "bike": 'MT15',
      "model": 'MT',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 3
    },
    {
      "name": "VIBU",
      "age": 20,
      "bike": 'R15 V3',
      "model": 'R15',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 2
    },
    {
      "name": "DINESH",
      "age": 20,
      "bike": 'R15S',
      "model": 'R15',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 2
    },
    {
      "name": "MAHESH",
      "age": 20,
      "bike": 'R15S',
      "model": 'R15',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 2
    },    
    {
      "name": "GANESH",
      "age": 20,
      "bike": 'MT15',
      "model": 'MT',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 3
    },
    {
      "name": "RAMKRISH",
      "age": 20,
      "bike": 'MT15',
      "model": 'MT',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 3
    },
    {
      "name": "VISHANT",
      "age": 20,
      "bike": 'R15 V3',
      "model": 'R15',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 2
    },
    {
      "name": "PRADHAP",
      "age": 20,
      "bike": 'R15S',
      "model": 'R15',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 2
    },
    {
      "name": "BIJU",
      "age": 20,
      "bike": 'FZ25',
      "model": 'FZ25',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 4
    },
    {
      "name": "PONRAJ",
      "age": 20,
      "bike": 'FZ25',
      "model": 'FZ25',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 4
    },
    {
      "name": "GOUTHAM",
      "age": 20,
      "bike": 'MT15',
      "model": 'MT',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 3
    },
    {
      "name": "ASIF",
      "age": 20,
      "bike": 'R3',
      "model": 'R3',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 1
    },
    {
      "name": "DEEPAK",
      "age": 20,
      "bike": 'FAZER 25',
      "model": 'FZ25',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 4
    },
    {
      "name": "DERIK",
      "age": 20,
      "bike": 'R15 V3',
      "model": 'R15',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 2
    },
    {
      "name": "GOKUL",
      "age": 20,
      "bike": 'R15 V3',
      "model": 'R15',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 2
    },
    {
      "name": "LOKESH",
      "age": 20,
      "bike": 'R15S',
      "model": 'R15',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 2
    },
    {
      "name": "VENDHAN",
      "age": 20,
      "bike": 'R15S',
      "model": 'R15',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 2
    },
    {
      "name": "VENKET",
      "age": 20,
      "bike": 'R15S',
      "model": 'R15',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 2
    },
    {
      "name": "RUP SAGAR",
      "age": 20,
      "bike": 'FZ25',
      "model": 'FZ25',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 4
    },
    {
      "name": "NOEL",
      "age": 20,
      "bike": 'R15 V3',
      "model": 'R15',
      "img": 'assets/arts/naresh.jpg',
      "modelid": 2
    }];
  }
}
