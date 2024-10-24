import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent  implements OnInit {

  time : string = '00:00:00';

  pulse_1 : string = '12.88';
  pulse_2 : string = '12.88';

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.getFullTime();
    }, 1000);

    setInterval(() => {
      this.setPulse();
    }, 100);
  }


  //set timeout to get date

  getFullTime(): void {
    let date = new Date();
    this.time = `${this.completeTime(date.getHours())}:${this.completeTime(date.getMinutes())}:${this.completeTime(date.getSeconds())}`;
  }

  setPulse() : void {
    this.pulse_1 = this.randomNumbers(12.00, 12.99);
    this.pulse_2 = this.randomNumbers(12.00, 12.99);
  }

  completeTime(value : number) : string {
    //convert to number
    if(value < 10) return `0${value}`;
    return `${value}`;
  }

  randomNumbers(min : number, max : number) : string {
    //get to decimal random number
    return (Math.random() * (max - min) + min).toFixed(2);
  }

}
