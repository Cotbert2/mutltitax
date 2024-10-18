import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    //change the time to 3000ms
    setTimeout(() => {
      window.location.href = '/start';
    },3000);
  }

}
