import { Component, OnInit } from '@angular/core';
import { AuthService } from 'ng2-ui-auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loggedUser;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.loggedUser = this.auth.getPayload();
    // console.log(' this.logged user is :: ', this.loggedUser);
  }
}
