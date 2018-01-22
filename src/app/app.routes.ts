import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ModuleWithProviders} from '@angular/core';

export const APP_ROUTERS: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(APP_ROUTERS);
