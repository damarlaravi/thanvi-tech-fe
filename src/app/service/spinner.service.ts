import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class SpinnerService {
    public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor() { }

    display(value: boolean) {
        this.status.next(value);
    }
}
