import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { StartComponent } from './start/start.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./splash-screen/splash-screen.component').then( m => m.SplashScreenComponent)
  },
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full'
  },
  {
    path: 'splash-screen',
    component: SplashScreenComponent
  }
  ,{
    path: 'start',
    component: StartComponent
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
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
