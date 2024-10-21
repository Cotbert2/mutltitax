import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-full-control',
  templateUrl: './full-control.component.html',
  styleUrls: ['./full-control.component.scss'],
})
export class FullControlComponent  implements OnInit {

  @ViewChild('canvas', {static: false}) canvas!: ElementRef<HTMLCanvasElement>;


  location : string = '1-22-343';

  //setup context variables for the viewer
  ctx: any;
  img : HTMLImageElement = new Image();

  ypos : number = 0;
  xpos : number = 0;

  steps : number = 30;


  limitsX : number[] = [0, 70];
  limitsY : number[] = [-50,70];

  constructor() { }

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.img.src = 'assets/example.jpg';

    this.img.onload = () => {
      this.drawImage();
    }
  }

  ngOnInit() {
    console.log('Full control component loaded');
    
    setInterval(() => {
      this.formLocation();
    }, 1000);
  }

  formLocation () : void {
    this.location = `${this,this.getRandomNumber(0,9)}-${this,this.getRandomNumber(10,99)}-${this.getRandomNumber(100,999)}`;
  }


  drawImage() : void{
    console.log('Drawing image');
    const canvas = this.canvas.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.drawImage(this.img, this.xpos, this.ypos, 5000, this.img.height ,0,0,500,500);

    const mark = new Image();
    mark.src = 'assets/mark2.png';
    mark.onload = () => {
      this.ctx.drawImage(mark, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    }
  }

  getRandomNumber(min : number, max : number) : number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  close () : void {
    window.location.href = '/main';
  }


  moveImage(xIncrement : number, yIncrement : number) : void {
    this.ypos += yIncrement;
    this.xpos += xIncrement;
    this.drawImage();
  }
}
