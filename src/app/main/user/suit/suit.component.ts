import { Component, OnInit,  } from '@angular/core';
import { Motion } from '@capacitor/motion';

//interface for vectors
interface Vector {
  x: number;
  y: number;
  z: number;
}

@Component({
  selector: 'app-suit',
  templateUrl: './suit.component.html',
  styleUrls: ['./suit.component.scss'],
})


export class SuitComponent  implements OnInit {

  acceleration : Vector = {x: 0, y: 0, z: 0};
  constructor() { }

  ngOnInit() {

    setInterval(() => {
      this.acceleration.x = this.generateRandomNumber(0, 1);
      this.acceleration.y = this.generateRandomNumber(0, 1);
      this.acceleration.z = this.generateRandomNumber(0, 1);
    }, 100);
    
    Motion.addListener('accel', (event) => {
      this.acceleration.x = event.acceleration.x;
      this.acceleration.y = event.acceleration.y;
      this.acceleration.z = event.acceleration.z;
      console.log('Acceleration: ', this.acceleration);
    });

  }

   acelerometerPermission()  {
    alert(this.acceleration.z + ' ' + this.acceleration.y + ' ' + this.acceleration.x);
    console.log( this.acceleration);
  }

  //OnDestroy
  ngOnDestroy() {
    Motion.removeAllListeners();
  }


  generateRandomNumber(min : number, max : number) : number {
    return Math.random() * (max - min) + min;
  }

}
