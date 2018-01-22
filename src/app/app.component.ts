import {Component, OnInit} from '@angular/core';
import {SharedService} from './service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'app';
  public isLoggedIn = false;
  constructor(private sharedService: SharedService) {

  }

  public ngOnInit(): void {
    this.sharedService.getLogged().subscribe(val => {
      console.log(' value is ', val);
      this.isLoggedIn = val;
    });
  }
}
