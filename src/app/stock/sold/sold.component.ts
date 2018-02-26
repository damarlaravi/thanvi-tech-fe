import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TechnoService } from '../../service/techno.service';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS } from '../../util/date-format';
import { DateUtil } from '../../util/date.util';

@Component({
  selector: 'app-sold',
  templateUrl: './sold.component.html',
  styleUrls: ['./sold.component.scss'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class SoldComponent implements OnInit {
  public soldForm: FormGroup;
  public minDate: Date;
  public grandTotal: string;
  public isFormSubmit = false;
  public addForm: FormGroup;

  constructor(private fb: FormBuilder, private ts: TechnoService) { }

  ngOnInit() {
    this.minDate = DateUtil.getMinDate();
    this.soldForm = this.fb.group({
      date: ['', [Validators.required]],
      product: ['', [Validators.required]],
      model: ['', [Validators.required]],
      unitRate: ['', [Validators.required]],
      qty: ['', [Validators.required]]
    });

    this.addForm = this.fb.group({
      add1: ['', [Validators.required]]
    });
  }


  public onStockDetails(): void {
    this.isFormSubmit = true;
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
}
