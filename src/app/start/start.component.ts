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
    this.playSoundSection('assets/audio/section_sound.mp3');
    window.location.href = '/main';
  }
  private playSoundSection(url : string) : void {
    const audio = new Audio();
    audio.src = url;
    audio.load();
    audio.play();
  }

}
