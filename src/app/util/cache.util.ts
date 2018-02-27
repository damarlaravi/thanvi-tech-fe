import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';


export function cacheable<T>(o: Observable<T>): Observable<T> {
    const replay = new ReplaySubject<T>(1);
    o.subscribe(
        x => replay.next(x),
        x => replay.error(x),
        () => replay.complete()
    );
    return replay.asObservable();
}
