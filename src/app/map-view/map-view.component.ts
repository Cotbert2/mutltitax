import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent  implements OnInit {
  
  //define a image resource as input
  @Input()  viewMap : string[] = [];

  currentIndex : number = 0;

  image_1 : string = "";
  constructor() { }

  ngOnInit() {
    this.image_1 = this.viewMap[this.currentIndex];
    console.log(`current map: ${this.viewMap[this.currentIndex]}`)
  }

  changeView() : void {
    //circleList of images
    if(this.currentIndex == (this.viewMap.length)) this.currentIndex = 0;

    console.log(`current map: ${this.currentIndex}`)

    this.image_1 = this.viewMap[this.currentIndex++];
  }

  //TODO: change format of buttons and action buttons

  zoomInFlag : boolean = false;

  zoomIn() : void {
    this.zoomInFlag = !this.zoomInFlag;
  }

  zoomOut() : void {

  }

}
