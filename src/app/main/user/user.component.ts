import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent  implements OnInit {

  userStatus : string = 'default';

  status : string = 'place';

  constructor() { }

  ngOnInit() {}

  changeUserStatus (newUserStatus : string) : void {
    this.userStatus = newUserStatus;
  }

}
