import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  start() : void {
    console.log('Starting application');
    window.location.href = '/main';
  }

}
