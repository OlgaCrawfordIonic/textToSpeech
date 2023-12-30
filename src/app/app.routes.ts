import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'text-to-speech',
    loadComponent: () => import('./text-to-speech/text-to-speech.page').then( m => m.TextToSpeechPage)
  },
  {
    path: 'calender',
    loadComponent: () => import('./calender/calender.page').then( m => m.CalenderPage)
  },
  {
    path: 'slider',
    loadComponent: () => import('./slider/slider.page').then( m => m.SliderPage)
  },
  {
    path: 'slider-french',
    loadComponent: () => import('./slider-french/slider-french.page').then( m => m.SliderFrenchPage)
  },
];
