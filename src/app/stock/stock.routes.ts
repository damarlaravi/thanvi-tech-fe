import {RouterModule, Routes} from '@angular/router';
import {StockComponent} from './stock.component';

const STOCK_ROUTE: Routes = [
  {
    path: '',
    component: StockComponent
  }
];

export const STOCK_ROUTES = RouterModule.forChild(STOCK_ROUTE);
