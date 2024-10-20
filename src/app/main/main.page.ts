import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  generalStatus : string = 'welcome';

  constructor() { }

  ngOnInit() {
  }


  changeStatus(newStatus : string) : void {
    this.generalStatus = newStatus;
  }

}
