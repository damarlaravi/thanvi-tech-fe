import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {StockComponent} from '../stock/stock.component';

const HOME_ROUTERS: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'stock',
    component: StockComponent
  }
];

export const HOME_ROUTES = RouterModule.forChild(HOME_ROUTERS);
