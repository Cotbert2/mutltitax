import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { GreetingComponent } from './greeting/greeting.component';
import { ComunityContentComponent } from './comunity-content/comunity-content.component';
import { CommunitySectionComponent } from './comunity-content/community-section/community-section.component';
import { UserComponent } from './user/user.component';
import { DefaultComponent } from './user/default/default.component';
import { PlaceComponent } from './user/place/place.component';
import { MapsComponent } from './maps/maps.component';
import { ControlsComponent } from './controls/controls.component';
import { SuitComponent } from './user/suit/suit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    
  ],
  declarations: [MainPage,
    GreetingComponent,
     ComunityContentComponent,
     UserComponent,
      DefaultComponent,
      PlaceComponent,
      MapsComponent,
      ControlsComponent,
      SuitComponent,
    CommunitySectionComponent]
})
export class MainPageModule {}
