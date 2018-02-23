import { Injectable } from '@angular/core';
import {
    HttpResponse,
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { SpinnerService } from './spinner.service';

@Injectable()
export class ServiceInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService) {
    }

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.display(true);
        const clonedRequest = req.clone({
            headers: req.headers.set('Content-Type', 'application/json')
        });

        return next.handle(clonedRequest).do((ev: HttpEvent<any>) => {
            setTimeout (() => {
                this.spinnerService.display(false);
            }, 1000);
            if (ev instanceof HttpResponse) {
                console.log('processing response', ev);
            }
            if (ev instanceof HttpErrorResponse) {
                console.log('Getting Error from service :: ', ev);
            }
        });
    }
}
