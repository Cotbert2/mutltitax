import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  isNoise : boolean = false;

  generalStatus : string = 'welcome';

  constructor() { }

  ngOnInit() : void {

    setInterval(() => {
      this.isNoise = !this.isNoise;
    }, 500);


    this.playLoopAudio('assets/audio/background_sound.mp3');
  }


  changeStatus(newStatus : string) : void {
    this.generalStatus = newStatus;
    this.playSoundSection('assets/audio/section_sound.mp3');
  }


  private playSoundSection(url : string) : void {
    const audio = new Audio();
    audio.src = url;
    audio.load();
    audio.play();
  }

  private playLoopAudio(url : string) : void {
    const audio = new Audio();
    audio.src = url;
    audio.load();
    audio.loop = true;
    audio.play();
  }

}
