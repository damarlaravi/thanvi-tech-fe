import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Stock, SellInfo, State } from '../model/app.model';
import { cacheable } from '../util/cache.util';

@Injectable()
export class TechnoService {
  private _cache: Observable<any>;
  constructor(private http: HttpClient) {
  }

  public forgotPassword(email): Observable<any> {
    return this.http.post<any>(`${environment.API_URL}/auth/forgot`, email);
  }

  public setNewPassword(obj): Observable<any> {
    /* let params = new HttpParams();
    params = params.append('token', token); */
    // console.log(' Obj is:: ', obj);
    return this.http.post<any>(`${environment.API_URL}/auth/reset`, obj);
  }

  public saveStock(stocks: Stock[]): Observable<Stock[]> {
    return this.http.post<Stock[]>(`${environment.API_URL}/stocks/add`, stocks);
  }

  public getStockDetails(): Observable<Stock[]> {
    // return this.http.get<Stock[]>(`${environment.API_URL}/stocks/get`);
    if (this._cache) {
      return this._cache;
    }
    return this._cache = cacheable<any>(this.http.get<Stock[]>(`${environment.API_URL}/stocks/get`));
  }

  public saveSells(sell: SellInfo): Observable<SellInfo> {
    return this.http.post<SellInfo>(`${environment.API_URL}/sells/add`, sell);
  }

  public getStateList(): Observable<State[]> {
    return this.http.get<State[]>(`${environment.STATE_LIST}`);
  }
}
