import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})

export class MapsComponent  implements OnInit {

  @ViewChild('canvas', {static: true}) canvas!: ElementRef<HTMLCanvasElement>;


  imageSrc : string = 'assets/mapa.jpeg';

  imageInfo : any = {
    ctx : undefined,
    img : new Image(),
    scale : 1,
    lastScale : 1,
    offsetX : 0,
    offsetY : 0,
    startX : 0,
    startY : 0,
    isDragging : false,
    lastTouchDistance : 0,
  };



  ngOnInit(): void {
    const canvas = this.canvas.nativeElement;
    this.imageInfo.ctx = canvas.getContext('2d');
    this.imageInfo.img.src = this.imageSrc;
    this.imageInfo.img.onload = () => this.drawImage();
  }

  private drawImage() : void {
    const canvas = this.canvas.nativeElement;
    this.imageInfo.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.imageInfo.ctx.drawImage(this.imageInfo.img,this.imageInfo.offsetX, this.imageInfo.offsetY, this.imageInfo.img.width * this.imageInfo.scale, this.imageInfo.img.height * this.imageInfo.scale);
  }


  private getDistance(event: TouchEvent) : number {

    const touch1 = event.touches[0];
    const touch2 = event.touches[1];

    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;

    return Math.sqrt(dx * dx + dy * dy);
  }


  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    //scroll
    if(event.touches.length === 1){
      this.imageInfo.isDragging = true;
      this.imageInfo.startX = event.touches[0].clientX - this.imageInfo.offsetX;
      this.imageInfo.startY = event.touches[0].clientY - this.imageInfo.offsetY;
    }

    //pich to scroll
    if(event.touches.length === 2){
      this.imageInfo.isDragging = false;
      this.imageInfo.lastTouchDistance = this.getDistance(event);
      this.imageInfo.lastScale = this.imageInfo.scale;

    }
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if(this.imageInfo.isDragging && event.touches.length === 1){
      this.imageInfo.offsetX = event.touches[0].clientX - this.imageInfo.startX;
      this.imageInfo.offsetY = event.touches[0].clientY - this.imageInfo.startY;
      this.drawImage();
    }
    else if(event.touches.length === 2){
      /*
      const distance = this.getDistance(event);
      const scale = this.imageInfo.lastScale + (distance - this.imageInfo.lastTouchDistance) / 1000;
      this.imageInfo.scale = Math.max(0.1, scale);
      this.drawImage();
      */


      const currentDistance = this.getDistance(event);
      const scaleDiff = currentDistance/this.imageInfo.lastTouchDistance;
      this.imageInfo.scale = this.imageInfo.lastScale * scaleDiff;
      this.drawImage();

    }
  }

  changeMapType(src:string) : void {
    this.playSoundSection('assets/audio/internal_section.mp3');
    this.imageSrc = src;
    this.imageInfo.img.src = this.imageSrc;
    this.imageInfo.img.onload = () => this.drawImage();
  }


  changeMapRadiation() : void {
    console.log("changing map");
    if(this.imageSrc == 'assets/mapa3.jpeg') this.changeMapType('assets/mapa4.jpeg');
    else if (this.imageSrc == 'assets/mapa4.jpeg') this.changeMapType('assets/mapa3.jpeg');
  }

  private playSoundSection(url : string) : void {
    const audio = new Audio();
    audio.src = url;
    audio.load();
    audio.play();
  }
}
