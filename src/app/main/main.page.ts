import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {


  isNoise : boolean = false;

  generalStatus : string = 'welcome';

  batteryLevel : string = '';

  dateToShow : String = '';

  constructor() { }

  ngOnInit() : void {

    setInterval(() => {
      const currentDate = new Date();

      this.dateToShow = `${this.completeDate(currentDate.getDate())}/${this.completeDate(currentDate.getMonth() + 1) }/${ this.completeDate(Number(currentDate.getFullYear()) + 44 )}`;
      console.log('asdasd'+this.dateToShow);
    }, 1000);

    setInterval(() => {
      this.isNoise = !this.isNoise;
    }, 500);


    this.playLoopAudio('assets/audio/background_sound.mp3');
    setInterval(()  => {
    Device.getBatteryInfo().then((info) => {
      if(info.batteryLevel != undefined) 
        this.batteryLevel = `${info.batteryLevel * 100}%`
    })}, 1000);
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

  completeDate (int : number) : string {
    if(int < 10) return `0${int}`;
    return `${int}`;
  }

}
