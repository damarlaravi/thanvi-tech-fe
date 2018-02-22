import { NativeDateAdapter } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DateFormat extends NativeDateAdapter {
  ormat(date: Date, displayFormat: Object): string {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    if (displayFormat === 'input') {
      return this._toString(day) + ' ' + this._to2digit(month) + ',' + year;
    } else {
      return this._toString(month) + ' ' + year;
    }
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }

  private _toString(n: number) {
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return month[n];
  }
}