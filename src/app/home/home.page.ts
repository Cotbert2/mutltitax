import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mapsUrl : string [] = [
    'assets/mapa.jpeg',
    'assets/mapa2.jpeg',
    'assets/mapa3.jpeg',
    'assets/mapa4.jpeg'
  ];

  constructor() {}

}
