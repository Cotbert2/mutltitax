import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { ScreenOrientation } from '@capacitor/screen-orientation';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
  ) {
    this.initializeApp();
  }
  
  initializeApp() {
    ScreenOrientation.lock({'orientation': 'landscape'});
    StatusBar.hide();
    SplashScreen.hide();
  }
}
