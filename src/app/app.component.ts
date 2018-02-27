import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from './service/shared.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'ng2-ui-auth';
import { SpinnerService } from './service/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public showLoader: boolean;
  private subscription$: Subscription;
  private loaderSubscription$: Subscription;
  public isLoggedIn = false;
  public isCollapsed = false;
  constructor(private sharedService: SharedService, private authService: AuthService,
    private ss: SpinnerService) {
    this.subscription$ = this.sharedService.getLogged().subscribe(val => {
      this.isLoggedIn = val;
    });
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  public ngOnInit(): void {
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
}
