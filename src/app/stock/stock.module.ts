import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STOCK_ROUTES } from './stock.routes';
import { StockComponent } from './stock.component';
import { ReceivedComponent } from './received/received.component';
import { SoldComponent } from './sold/sold.component';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    STOCK_ROUTES,
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatTabsModule
  ],
  declarations: [StockComponent, ReceivedComponent, SoldComponent],
  exports: [StockComponent]
})
export class StockModule {
}
