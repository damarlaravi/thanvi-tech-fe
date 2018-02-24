import { Injectable } from '@angular/core';
import {
    HttpResponse,
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpErrorResponse,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { SpinnerService } from './spinner.service';
import { AuthService } from 'ng2-ui-auth';

@Injectable()
export class ServiceInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService) {
    }

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
            // console.log('Token is::  ', localStorage.getItem('thanvi-tech_token'));
        const headers = new HttpHeaders({
            'Authorization': `${localStorage.getItem('thanvi-tech_token')}`,
            'Content-Type': 'application/json'
        });

        this.spinnerService.display(true);
        const clonedRequest = req.clone({
            headers: headers
        });

        return next.handle(clonedRequest).do((ev: HttpEvent<any>) => {
            setTimeout(() => {
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
