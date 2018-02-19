import { Injectable } from '@angular/core';
import { HttpResponse, HttpEvent, HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class ServiceInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        const clonedRequest = req.clone({
            headers: req.headers.set('Content-Type', 'application/json')
        });

        return next.handle(clonedRequest).do((ev: HttpEvent<any>) => {
            if (ev instanceof HttpResponse) {
                console.log('processing response', ev);
            }
        });
    }
}
