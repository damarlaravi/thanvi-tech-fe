import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { SharedService } from './service/shared.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'ng2-ui-auth';
import { SpinnerService } from './service/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewChecked {

  public showLoader: boolean;
  private subscription$: Subscription;
  private loaderSubscription$: Subscription;
  public isLoggedIn = false;
  public isCollapsed = false;
  constructor(private sharedService: SharedService, private authService: AuthService,
    private ss: SpinnerService, private cdRef: ChangeDetectorRef) {

  }

  public ngOnInit(): void {
    this.subscription$ = this.sharedService.getLogged().subscribe(val => {
      this.isLoggedIn = val;
    });

    this.loaderSubscription$ = this.ss.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
    if (this.loaderSubscription$) {
      this.loaderSubscription$.unsubscribe();
    }
  }

  public ngAfterViewChecked(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.cdRef.detectChanges();
  }
}
