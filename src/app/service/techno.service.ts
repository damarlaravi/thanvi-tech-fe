import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class TechnoService {

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
}
