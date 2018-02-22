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
        this.spinnerService.start();
        const clonedRequest = req.clone({
            headers: req.headers.set('Content-Type', 'application/json')
        });

        return next.handle(clonedRequest).do((ev: HttpEvent<any>) => {
            if (ev instanceof HttpResponse) {
                this.spinnerService.stop();
                console.log('processing response', ev);
            }
            if (ev instanceof HttpErrorResponse) {
                this.spinnerService.stop();
                console.log('Getting Error from service :: ', ev);
            }
        });
    }
}
