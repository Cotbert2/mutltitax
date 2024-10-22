import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {


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

  Welcome to Multitax
  `

  currentText : string = '';

  addText() : void {
    setInterval(() => {
      this.currentText += this.textToPrint[0];
      this.textToPrint = this.textToPrint.substring(1);
    }, 200);
  }

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.isFirstSplashScreen = false
      this.addText();
    }, 3000)

    //change the time to 3000ms
    /*
    setTimeout(() => {
      window.location.href = '/start';
    },3000);
    */

    ///setTimeout(() => this.isFirstSplashScreen = false, 3000);
  }

}
