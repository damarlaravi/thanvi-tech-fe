import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {SharedService} from '../service/shared.service';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
  public titleText = 'Sample Material App'; // Thanvi Techno Solution
  public navList = [
    {routePath: 'home', description: 'Home'},
    {routePath: 'stock', description: 'Stock'}
  ];

  public userList = [
    {routePath: 'sign-up', description: 'Signup'},
    {routePath: 'profile', description: 'Profile'},
    {routePath: 'auth/logout', description: 'Logout'},
  ];
  public isLoggedIn = false;
  private subscription: Subscription;

  constructor(private ss: SharedService, private router: Router) {

  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.ss.getLogged().subscribe(val => {
      // console.log(' value is abcd dd ', val);
      this.isLoggedIn = val;
    });
  }

  public onLogOut(): void {
    this.router.navigate(['/logout']);
  }
}
