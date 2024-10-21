import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent  implements OnInit {

  @ViewChild('canvas', {static: false}) canvas!: ElementRef<HTMLCanvasElement>;

  state : string = 'idle';

  constructor() { }

  ngOnInit() {}


  ctx: any;
  img : HTMLImageElement = new Image();

  ypos : number = 500;
  xpos : number = 200;

  steps : number = 30;


  limitsX : number[] = [0, 70];
  limitsY : number[] = [-50,70];

  moveToRight : boolean = true;

  automaticInterval : any;

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');

     this.img.src = 'assets/example.jpg';

     
     this.img.onload = () => {
       this.drawImage();
    }
  }


  drawImage() : void{
    const canvas = this.canvas.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.drawImage(this.img, this.xpos, this.ypos, 5000, this.img.height ,0,0,500,500);

    const mark = new Image();
    mark.src = 'assets/mark.png';
    mark.onload = () => {
      this.ctx.drawImage(mark, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    }
  }


  moveImage(xIncrement : number, yIncrement : number) : void {
    this.ypos += yIncrement;
    this.xpos += xIncrement;
    this.drawImage();
  }

  getNumToIcrementAutomatic() : number {
    if(this.moveToRight && this.xpos >= this.limitsX[1]) this.moveToRight = false;
    else if(!this.moveToRight && this.xpos <= this.limitsX[0]) this.moveToRight = true;

    console.log(`y position: ${this.xpos}`);

    if(this.moveToRight) return this.steps;
    else return -this.steps;
  }

  automaticMove() : void {
    this.automaticInterval = setInterval(() => {
      this.moveImage(this.getNumToIcrementAutomatic(),0);
      console.log(`moving to ${this.moveToRight}`);
    }, 1000);
  }

  changeState(newstate : string) : void {
    this.state = newstate;
    if(this.state == 'automatic') this.automaticMove();
    else clearInterval(this.automaticInterval);
  }


  timeoutHandler : any;

  mouseDownFun() : void {
    console.log('Mouse down');
    this.timeoutHandler = setTimeout(() => {
      this.timeoutHandler = null;
      console.log('Holding');
    }, 300);
  }



  mouseUpFun() : void {
    if(this.timeoutHandler){
      clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }

  

}
