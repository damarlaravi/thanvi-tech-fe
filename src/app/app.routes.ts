import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ModuleWithProviders} from '@angular/core';

export const APP_ROUTERS: Routes = [
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'stock',
    loadChildren: './stock/stock.module#StockModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(APP_ROUTERS);
