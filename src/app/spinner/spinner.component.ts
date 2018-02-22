import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpinnerService } from '../service/spinner.service';

@Component({
    selector: 'app-spinner',
    template: `<div *ngIf="active">
    <mat-progress-spinner style="margin:0 auto;" mode="indeterminate"></mat-progress-spinner>
</div>`
})

export class SpinnerComponent implements OnInit, OnDestroy {

    public active: boolean;

    public constructor(private spinner: SpinnerService) {
        spinner.status.subscribe((status: boolean) => {
            this.active = status;
        });
    }
    /**
     *  or do it on some other event eg: when xmlhttp request completes 
     * loading data for the component
     * 
     */ 
    ngOnInit() {
        this.spinner.stop(); 
    }

    ngOnDestroy() {
        this.spinner.start();
    }

}
