import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  @ViewChild('letters') letters!: ElementRef<HTMLTextAreaElement>;

  updateScroll(){
    const textArea = this.letters.nativeElement;
    textArea.scrollTop = textArea.scrollHeight;
  }

  isFirstSplashScreen : boolean = true;

  textToPrint : string = `

  root@minex:~$ whoami
    "I don't know"
  root@minex:~$ pwd
    /home/minex
  root@minex:~$ systemctl stop multitax
  root@minex:~$ systemctl start multitax
  root@minex:~$ ./minex
  [+]Welcome to Minex OS
  downloading templates...
  ::Syncronizing package databases...
  (unable to lock database)
  Warnig: The package 'aliens' has already been installed
  --> Installing package minexExportation..
  --> Pacman is already in use place wait...
  --> Pacman is already in use place wait...
  --> Pacman is already in use place wait...
        Checking dependencies.....ok
        Mirroring package...ok
        Extracting package...ok
        Fetching last survival guide...error
        error: failed to commit transaction (conflicting files)
        code: 1
  [+] Loading services...
  [+] Minex OS is ready to use ;)
  root@minex:~$ systemctl status backToHome
  the service is not exist
  root@minex:~$ systemctl status multitax
  the service is running
  /-/ checking for updates of survivors
  root@minex:~$
  root@minex:~$
  root@minex:~$
  root@minex:~$
  root@minex:~$
  root@minex:~$
  root@minex:~$
  root@minex:~$
  root@minex:~$
  root@minex:~$
  root@minex:~$ shutdown -h now
  [-] You don't have permission to shutdown the system
  [-] You just work for Minex
  root@minex:~$ echo "You belong Us" > /dev/null
  root@minex:~$ echo "You belong Us" > /dev/null
  root@minex:~$ echo "You belong Us" > /dev/null
  Welcome to Multitax
  `

  currentText : string = '';
  typingInterval : any;

  addText() : void {
    this.typingInterval = setInterval(() => {
      this.updateScroll();
      this.currentText += this.textToPrint[0];
      this.textToPrint = this.textToPrint.substring(1);

      if (this.textToPrint.length == 0) {
        clearInterval(this.typingInterval);
        window.location.href = '/start';
      }
    }, 10);
  }

  constructor() { }

  ngOnInit() {
    console.log(`On Init `);


    //change the time to 3000ms
    /*
    setTimeout(() => {
      window.location.href = '/start';
    },3000);
    */

    ///setTimeout(() => this.isFirstSplashScreen = false, 3000);
  }

  public StartSplash() : void {
    this.playSoundPresentation('assets/audio/splash_sound.mp3');
    setTimeout(() => {
      this.isFirstSplashScreen = false;
      this.addText();
      //this.addText();
    }, 5000);
    this.playSoundPresentation('assets/audio/presentation.mp3');
  }


  private playSoundPresentation(url : string) : void {
    const audio = new Audio();
    audio.src = url;
    audio.load();
    audio.play();
  }

}
