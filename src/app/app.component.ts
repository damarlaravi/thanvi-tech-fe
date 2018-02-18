import {AfterViewInit, Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {SharedService} from './service/shared.service';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from 'ng2-ui-auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  // title = 'app';
  private subscription$: Subscription;
  public isLoggedIn = false;
  public isCollapsed = false;
  constructor(private sharedService: SharedService, private authService: AuthService) {

  }

  public ngOnInit(): void {
    this.subscription$ = this.sharedService.getLogged().subscribe(val => {
      this.isLoggedIn = val;
    });

    this.isLoggedIn = this.authService.isAuthenticated();
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
