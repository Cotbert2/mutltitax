import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { FullControlComponent } from './full-control/full-control.component';
import { SplashPage } from './splash/splash.page';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./splash/splash-routing.module').then( m => m.SplashPageRoutingModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    component: SplashPage
  }
  ,{
    path: 'start',
    component: StartComponent
  },
  {
    path: 'full-control',
    component: FullControlComponent
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  }
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
