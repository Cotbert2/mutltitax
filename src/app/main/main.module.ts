import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { GreetingComponent } from './greeting/greeting.component';
import { ComunityContentComponent } from './comunity-content/comunity-content.component';
import { CommunitySectionComponent } from './comunity-content/community-section/community-section.component';
import { UserComponent } from './user/user.component';
import { DefaultComponent } from './user/default/default.component';

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
    CommunitySectionComponent]
})
export class MainPageModule {}
