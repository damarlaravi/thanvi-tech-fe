import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TechnoService } from '../../service/techno.service';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS } from '../../util/date-format';
import { DateUtil } from '../../util/date.util';
import { Subscription } from 'rxjs/Subscription';
import { Stock, State, SellInfo, AddressTypes } from '../../model/app.model';
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
  public isAddForm = false;
  public addForm: FormGroup;
  public stocks: Array<Stock> = [];
  private subscription$: Subscription;
  public qtyMisMatchError: string;
  public addedOutStockDetails: Array<Stock> = [];
  public isSaveSubmit = false;
  public statesList: Array<State> = [];
  public addressTypes = [AddressTypes.HomeType, AddressTypes.OfficeType, AddressTypes.ShowroomType];

  constructor(private fb: FormBuilder, private ts: TechnoService) { }

  ngOnInit() {
    this.minDate = DateUtil.getMinDate();
    this.soldForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      date: ['', [Validators.required]],
      product: ['', [Validators.required]],
      model: ['', [Validators.required]],
      unitRate: [{ value: '', disabled: true }, [Validators.required]],
      qty: ['', [Validators.required]]
    });

    this.addForm = this.fb.group({
      name: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      address2: [''],
      landMark: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      addressType: ['', [Validators.required]]
    });

    this.getStockDetails();
    this.setDefaultFormData();
    this.getStatesList();
  }


  ngOnDestroy(): void {
    console.log(' In Received Component destroy metthod calling');
    // throw new Error('Method not implemented.');
    this.subscription$.unsubscribe();
  }

  public onStockDetails(): void {
    this.isAddForm = true;
    this.qtyMisMatchError = '';
    if (this.soldForm.valid && this.qtyMisMatchError === '') {
      const stockInfo: Stock = this.soldForm.value;
      const stockModel = this.soldForm.get('model').value;
      stockInfo.model = stockModel.model;
      stockInfo.quantity = this.soldForm.get('qty').value;
      stockInfo.id = stockModel.id;
      this.addedOutStockDetails.push(stockInfo);
      console.log('Seleted stock info is ::: ', stockInfo);
    } else {
      console.log('Form is invalid');
    }
  }

  public onEdit(s: Stock): void {
    this.setDefaultFormData(s);
  }

  public onDelete(model: string) {
    let i = 0;
    for (const stock of this.addedOutStockDetails) {
      if (stock.model === model) {
        return this.addedOutStockDetails.splice(i, 1);
      }
      i++;
    }
  }

  public onReset(): void {
    this.soldForm.reset();
    this.isAddForm = false;
  }

  public calculateGrandTotal(): void {
    if (this.soldForm.get('unitRate').value && this.soldForm.get('qty').value) {
      const unitRate: number = parseFloat(this.soldForm.get('unitRate').value);
      const qty: number = parseFloat(this.soldForm.get('qty').value);
      this.grandTotal = (unitRate * qty).toFixed(2);
    }
  }

  public onSelectChange(stock: Stock): void {
    // console.log('Stock Info getting ::  ', stock);
    if (stock) {
      this.soldForm.get('id').setValue(stock.id);
      this.soldForm.get('unitRate').setValue(stock.unitRate);
      this.soldForm.get('qty').setValue(stock.quantity);
    }
    this.soldForm.get('unitRate').enable({});
    this.calculateGrandTotal();
  }

  public validateQty(): void {
    const quantity = this.soldForm.get('qty').value;
    const stockInfo = this.soldForm.get('model').value;
    // console.log('Model in validateQty :::  ', model);
    if (quantity <= this.getSelectedModelInfo(stockInfo.model).quantity) {
      this.qtyMisMatchError = '';
      this.calculateGrandTotal();
    } else {
      this.grandTotal = '';
      this.qtyMisMatchError = `Enter ${this.soldForm.get('qty').value} but available ${stockInfo.quantity}`;
    }
  }

  public onSave(): void {
    this.isSaveSubmit = true;
    if (this.addedOutStockDetails.length > 0 && this.addForm.valid) {
      const sellInfo = {} as SellInfo;
      sellInfo.stocks = this.addedOutStockDetails;
      sellInfo.address = this.addForm.value;
      this.subscription$ = this.ts.saveSells(sellInfo).subscribe((resp) => {
        console.log('getting success info ', resp);
      });
    }
  }

  public onResetSell(): void {
    this.addForm.reset();
  }

  private getSelectedModelInfo(model): Stock {
    console.log('Model is ::  ', model);
    for (const stock of this.stocks) {
      if (stock.model === model) {
        return stock;
      }
    }
  }

  private setDefaultFormData(s: Stock = null): void {
    if (s) {
      const date = DateUtil.convertStringToDate(s.date);
      this.soldForm.get('date').setValue(date);
      this.soldForm.get('product').setValue(s.product);
      this.soldForm.get('model').setValue(s.model);
      this.soldForm.get('qty').setValue(s.quantity);
      this.soldForm.get('unitRate').setValue(s.unitRate);
    } else {
      this.soldForm.get('date').setValue(moment(new Date(), 'dd-MM-yyyy'));
      this.soldForm.get('product').setValue('LG Product');
    }

  }

  private getStockDetails(): void {
    this.subscription$ = this.ts.getStockDetails().subscribe((resp) => {
      this.stocks = resp;
    });
  }

  private getStatesList(): void {
    this.subscription$ = this.ts.getStateList().subscribe((states) => {
      this.statesList = states;
    });
  }
}
