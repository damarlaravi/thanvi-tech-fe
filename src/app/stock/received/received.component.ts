import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
import { Stock } from '../../model/app.model';
const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],
})
export class ReceivedComponent implements OnInit {
  public receivedForm: FormGroup;
  public minDate: Date;
  public isFormSubmit: boolean;
  public grandTotal: string;
  public stockDetails: Array<Stock> = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.minDate = new Date();
    this.receivedForm = this.fb.group({
      date: ['', [Validators.required]],
      product: ['', [Validators.required]],
      model: ['', [Validators.required]],
      unitRate: ['', [Validators.required]],
      qty: ['', [Validators.required]]
    });
    this.setDefaultData();
  }

  private setDefaultData(): void {
    this.receivedForm.get('product').setValue('LG Product');
    this.receivedForm.get('date').setValue(moment(new Date(), 'dd-MM-yyyy'));
  }

  public calculateGrandTotal(): void {
    if (this.receivedForm.get('unitRate').value && this.receivedForm.get('qty').value) {
      const unitRate: number = parseFloat(this.receivedForm.get('unitRate').value);
      const qty: number = parseFloat(this.receivedForm.get('qty').value);
      this.grandTotal = (unitRate * qty).toFixed(2);
    }
  }

  public onStockDetails(): void {
    this.isFormSubmit = true;
    if (this.receivedForm.valid) {
      const stockInfo: Stock = this.receivedForm.value;
      stockInfo.id = Math.floor((Math.random() * 100));
      stockInfo.date = moment(stockInfo.date).format('DD/MM/YYYY');
      stockInfo.unitRate = parseFloat(this.receivedForm.get('unitRate').value);
      this.stockDetails.push(this.receivedForm.value);
    }
  }

  public onReset(): void {
    this.isFormSubmit = false;
    this.receivedForm.reset();
    this.setDefaultData();
  }

  public onEdit(s): void {

  }

  public onDelete(id): void {

  }
}
