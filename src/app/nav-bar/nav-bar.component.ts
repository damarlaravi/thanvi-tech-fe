import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {SharedService} from '../service/shared.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  public isLoggedIn = false;

  constructor(private ss: SharedService) {

  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.ss.getLogged().subscribe(val => {
      console.log(' value is abcd dd ', val);
      this.isLoggedIn = val;
    });
  }

}
