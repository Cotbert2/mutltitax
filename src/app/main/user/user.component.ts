import { Component, OnInit } from '@angular/core';
import { Motion } from '@capacitor/motion';

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
    this.playSoundSection('assets/audio/internal_section.mp3');
  }

  private playSoundSection(url : string) : void {
    const audio = new Audio();
    audio.src = url;
    audio.load();
    audio.play();
  }

}
