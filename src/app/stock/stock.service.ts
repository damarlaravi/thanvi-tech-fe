import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { StockIn } from '../model/app.model';

@Injectable()
export class StockService {
    public stockInList: BehaviorSubject<StockIn[]> = new BehaviorSubject<StockIn[]>([]);

    constructor() {}

    getStocksList(value: StockIn[]) {
        this.stockInList.next(value);
    }
}
