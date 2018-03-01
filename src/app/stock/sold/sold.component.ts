import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TechnoService} from '../../service/techno.service';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {MY_FORMATS} from '../../util/date-format';
import {DateUtil} from '../../util/date.util';
import {Subscription} from 'rxjs/Subscription';
import {Stock} from '../../model/app.model';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-sold',
  templateUrl: './sold.component.html',
  styleUrls: ['./sold.component.scss']
})
export class SoldComponent implements OnInit, OnDestroy {
  public soldForm: FormGroup;
  public minDate: Date;
  public grandTotal: string;
  public isFormSubmit = false;
  public addForm: FormGroup;
  public stocks: Array<Stock> = [];
  private subscription$: Subscription;
  public qtyMisMatchError: string;

  constructor(private fb: FormBuilder, private ts: TechnoService) { }

  ngOnInit() {
    this.minDate = DateUtil.getMinDate();
    this.soldForm = this.fb.group({
      date: ['', [Validators.required]],
      product: ['', [Validators.required]],
      model: ['', [Validators.required]],
      unitRate: [{ value: '', disabled: true }, [Validators.required]],
      qty: ['', [Validators.required]]
    });

    this.addForm = this.fb.group({
      add1: ['', [Validators.required]]
    });

    this.getStockDetails();
    this.setDefaultFormData();
  }


  ngOnDestroy(): void {
    console.log(' In Received Component destroy metthod calling');
    // throw new Error('Method not implemented.');
    this.subscription$.unsubscribe();
  }

  public onStockDetails(): void {
    this.isFormSubmit = true;
    this.qtyMisMatchError = '';
    if (this.soldForm.valid && this.qtyMisMatchError === '') {

    } else {

    }
  }

  public onReset(): void {
    this.soldForm.reset();
    this.isFormSubmit = false;
  }

  public calculateGrandTotal(): void {
    if (this.soldForm.get('unitRate').value && this.soldForm.get('qty').value) {
      const unitRate: number = parseFloat(this.soldForm.get('unitRate').value);
      const qty: number = parseFloat(this.soldForm.get('qty').value);
      this.grandTotal = (unitRate * qty).toFixed(2);
    }
  }

  public onSelectChange(model): void {
    let selectedStockInfo: Stock;
    if (model) {
      selectedStockInfo = this.getSelectedModelInfo(model);
    }

    if (selectedStockInfo) {
      this.soldForm.get('unitRate').setValue(selectedStockInfo.unitRate);
      this.soldForm.get('qty').setValue(selectedStockInfo.quantity);
    }

    this.calculateGrandTotal();
  }

  public validateQty(): void {
    const quantity = this.soldForm.get('qty').value;
    const model = this.soldForm.get('model').value;
    if (quantity <= this.getSelectedModelInfo(model).quantity) {
      this.qtyMisMatchError = '';
    } else {
      this.qtyMisMatchError = `Enter ${this.soldForm.get('qty').value} but available ${this.getSelectedModelInfo(model).quantity}`;
    }
  }

  private getSelectedModelInfo(model): Stock {
    for (const stock of this.stocks) {
      if (stock.model === model) {
        return stock;
      }
    }
  }

  private setDefaultFormData(): void {
    this.soldForm.get('date').setValue(moment(new Date(), 'dd-MM-yyyy'));
    this.soldForm.get('product').setValue('LG Product');
  }

  private getStockDetails(): void {
    this.subscription$ = this.ts.getStockDetails().subscribe((resp) => {
      this.stocks = resp;
    });
  }
}
