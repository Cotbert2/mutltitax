import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
})
export class PlaceComponent  implements OnInit {

  planetAssets : string [] = ["assets/planet.png", "assets/planet2.png", "assets/planet3.png"];
  currentIndex : number = 0;
  currentPlanet : string = this.planetAssets[0];


  constructor() { }

  ngOnInit() {
    this.updatePlanet();
  }


  circleList() : string {
    if(this.currentIndex == this.planetAssets.length) this.currentIndex = 0;
    return this.planetAssets[this.currentIndex++];
  }

  updatePlanet() : void {
    this.currentPlanet = this.circleList();
  }

}
