import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent  implements OnInit {

  @ViewChild('canvas', {static: false}) canvas!: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngOnInit() {}


  ctx: any;
  img : HTMLImageElement = new Image();

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
     this.img.src = 'assets/example.jpeg';
     this.img.onload = () => {
      this.drawImage();
      }
  }
  ypos = 0;

  drawImage() {

    const canvas = this.canvas.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.drawImage(this.img, this.ypos, 0, canvas.width, canvas.height, 0, 0, 1000, 1000); 
  }


  moveImage() {
    this.ypos += 10;
    this.drawImage();
  }

}
