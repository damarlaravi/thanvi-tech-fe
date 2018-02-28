import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SharedService {
  private subject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public setLogged(val: boolean): void {
    //  console.log('value is :: ', val);
    this.subject.next(val);
  }

  public getLogged(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
