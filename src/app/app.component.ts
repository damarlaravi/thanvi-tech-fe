import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'ng2-ui-auth';
import { SpinnerService } from './service/spinner.service';
import { Router } from '@angular/router';

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
  private isInHomeScreen = false;
  constructor(private authService: AuthService,
    private ss: SpinnerService, private cdRef: ChangeDetectorRef, private router: Router) {

  }

  public ngOnInit(): void {
    this.subscription$ = this.ss.getLogged().subscribe(val => {
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
    if (!this.isInHomeScreen && this.isLoggedIn) {
      console.log(this.router.url);  
      this.router.navigate(['/home']);
      this.isInHomeScreen = true;
    } 
    this.cdRef.detectChanges();
  }
}
