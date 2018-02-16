import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HOME_ROUTES} from './home.router';
import { StockComponent } from '../stock/stock.component';

@NgModule({
  declarations: [HomeComponent, StockComponent],
  imports: [HOME_ROUTES],
})

export class HomeModule {
}
