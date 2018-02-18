import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {STOCK_ROUTES} from './stock.routes';
import {StockComponent} from './stock.component';

@NgModule({
  imports: [
    STOCK_ROUTES,
    CommonModule
  ],
  declarations: [StockComponent],
  exports: [StockComponent]
})
export class StockModule {
}
