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
      "bike": 'FAZER 150',
      "model": 'FZ',
    },
    {
      "name": "SNEYAL",
      "age": 21,
      "bike": 'R3',
      "model": 'R3',
    },
    {
      "name": "JOHN",
      "age": 26,
      "bike": 'FAZER 250',
      "model": 'FZ25',
    },
    {
      "name": "PREM",
      "age": 27,
      "bike": 'R15 V3',
      "model": 'R15',
    },
    {
      "name": "C-RUN",
      "age": 28,
      "bike": 'R15 V3',
      "model": 'R15',
    },
    {
      "name": "JINCY",
      "age": 28,
      "bike": 'R3',
      "model": 'R3',
    },
    {
      "name": "PETER",
      "age": 28,
      "bike": 'FZ150',
      "model": 'FZ',
    },
    {
      "name": "ABISHEK",
      "age": 26,
      "bike": 'FZ25',
      "model": 'FZ25',
    },
    {
      "name": "ABU",
      "age": 20,
      "bike": 'MT15',
      "model": 'MT',
    },
    {
      "name": "RISHI",
      "age": 20,
      "bike": 'MT15',
      "model": 'MT',
    },
    {
      "name": "VIGNESH",
      "age": 20,
      "bike": 'MT15',
      "model": 'MT',
    }]
  }
}
