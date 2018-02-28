import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
import {Stock} from '../../model/app.model';
import {DateUtil} from '../../util/date.util';
import {TechnoService} from '../../service/techno.service';
import {MY_FORMATS} from '../../util/date-format';
import {Subscription} from 'rxjs/Subscription';

const moment = _moment;

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ]
})
export class ReceivedComponent implements OnInit, OnDestroy {
  public receivedForm: FormGroup;
  public minDate: Date;
  public isFormSubmit: boolean;
  public grandTotal: string;
  public stockDetails: Array<Stock> = [];
  private subscription$: Subscription;

  constructor(private fb: FormBuilder, private techService: TechnoService) {
  }

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

  private setDefaultData(s: Stock = null): void {
    if (s) {
      const date = DateUtil.convertStringToDate(s.date);
      this.receivedForm.get('date').setValue(date);
      this.receivedForm.get('product').setValue(s.product);
      this.receivedForm.get('model').setValue(s.model);
      this.receivedForm.get('qty').setValue(s.quantity);
      this.receivedForm.get('unitRate').setValue(s.unitRate);
    } else {
      this.receivedForm.get('product').setValue('LG Product');
      this.receivedForm.get('date').setValue(moment(new Date(), 'dd-MM-yyyy'));
    }
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
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
      if (this.isModelNotSaved()) {
        const stockInfo: Stock = this.receivedForm.value;
        stockInfo.date = moment(stockInfo.date).format('DD/MM/YYYY');
        stockInfo.quantity = this.receivedForm.get('qty').value;
        stockInfo.unitRate = parseFloat(this.receivedForm.get('unitRate').value);
        this.stockDetails.push(this.receivedForm.value);
        this.onReset();
      } else {
        alert('Model already added please edit');
      }
    }
  }

  public onSaveStockDetails(): void {
    this.subscription$ = this.techService.saveStock(this.stockDetails).subscribe((res) => {
      console.log('getting response:::   ', res);
      alert('Saved Successfully');
      this.onReset();
      this.stockDetails = [];
    }, err => console.log('getting Error is :: ', err));
  }

  public onReset(): void {
    this.receivedForm.reset();
    this.grandTotal = null;
    this.setDefaultData();
    this.isFormSubmit = false;
  }

  public onEdit(s: Stock): void {
    this.setDefaultData(s);
  }

  public onDelete(model): void {
    let i = 0;
    for (const stock of this.stockDetails) {
      if (stock.model === model) {
        this.stockDetails.splice(i, 1);
        return;
      }
      i++;
    }
  }

  private isModelNotSaved(): boolean {
    let isExit = true;
    const model = this.receivedForm.get('model').value;
    const date = moment(this.receivedForm.get('date').value).format('DD/MM/YYYY');
    for (const stock of this.stockDetails) {
      if (stock.model === model && stock.date === date) {
        isExit = false;
      }
    }
    return isExit;
  }
}
