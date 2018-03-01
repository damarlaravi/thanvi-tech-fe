import {Component, OnInit} from '@angular/core';
import {AuthService} from 'ng2-ui-auth';
import {Router} from '@angular/router';
import { SpinnerService } from '../../service/spinner.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private ss: SpinnerService) {
  }

  ngOnInit() {
    this.authService.logout()
      .subscribe({
        error: (err: any) => console.log(err),
        complete: () => {
          this.router.navigate(['']);
          this.ss.setLogged(false);
        }
      });
  }

}
