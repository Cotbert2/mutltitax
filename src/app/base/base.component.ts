import { Component, OnInit } from '@angular/core';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
