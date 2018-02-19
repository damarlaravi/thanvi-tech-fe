import { Component, OnInit } from '@angular/core';
import { AuthService } from 'ng2-ui-auth';
import { UserModel } from '../model/user.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  public userData: UserModel;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userData = this.authService.getPayload();
  }

}
