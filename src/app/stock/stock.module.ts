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
  MatTabsModule,
  MatSelectModule,
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NumberOnlyDirective } from '../directive/numberOnly.directive';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS } from '../util/date-format';
import { StockService } from './stock.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    STOCK_ROUTES,
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatTabsModule, 
    MatSelectModule
  ],
  providers: [
     // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    StockService
  ],
  declarations: [StockComponent, ReceivedComponent, SoldComponent, NumberOnlyDirective],
  exports: [StockComponent]
})
export class StockModule {
}
