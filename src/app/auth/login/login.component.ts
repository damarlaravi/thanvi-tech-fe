import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'ng2-ui-auth';
import {FormHelperService} from '../../service/form-helper.service';
import { SpinnerService } from '../../service/spinner.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private ss: SpinnerService, private auth: AuthService,
              private router: Router,
              public fh: FormHelperService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(loginData: { username: string, password: string }) {
    this.ss.setLogged(false);
    this.auth.login(loginData)
      .subscribe({
        next: (response) => {
          this.auth.setToken(response.token);
          // console.log('token is   ', response.token);
          this.ss.setLogged(true);
        },
        error: (err: any) => alert(err.message),
        complete: () => this.router.navigate(['/home'])
      });
  }

  public onClearForm(): void {
    this.form.reset();
  }
}
