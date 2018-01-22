import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SharedService {
  private subject = new Subject<boolean>();

  public setLogged(val: boolean): void {
    console.log('value is :: ', val);
    this.subject.next(val);
  }

  getLogged(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
