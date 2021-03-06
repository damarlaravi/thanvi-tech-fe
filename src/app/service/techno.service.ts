import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SellInfo, State, StockIn } from '../model/app.model';
import { cacheable } from '../util/cache.util';

@Injectable()
export class TechnoService {
  private _cache: Observable<any>;
  private _stateCache: Observable<State[]>;
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

  public saveStock(stocks: StockIn[]): Observable<StockIn[]> {
    return this.http.post<StockIn[]>(`${environment.API_URL}/stocks/add`, stocks);
  }

  public getStockDetails(): Observable<StockIn[]> {
    // return this.http.get<Stock[]>(`${environment.API_URL}/stocks/get`);
    if (this._cache) {
      return this._cache;
    }
    return this._cache = cacheable<any>(this.http.get<StockIn[]>(`${environment.API_URL}/stocks/get`));
  }

  public saveSells(sell: SellInfo): Observable<SellInfo> {
    this._cache = null;
    return this.http.post<SellInfo>(`${environment.API_URL}/sells/add`, sell);
  }

  public getStateList(): Observable<State[]> {
    if (this._stateCache) {
      return this._stateCache;
    }
    return this._stateCache = cacheable<any>(this.http.get<State[]>(`${environment.STATE_LIST}`));
  }

  public checkTokenValid(header): Observable<any> {
    return this.http.post<any>(`${environment.API_URL}/auth/verifyToken`, header);
  }
}
