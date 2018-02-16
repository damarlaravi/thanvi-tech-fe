import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SharedService} from '../../service/shared.service';
import {Router} from '@angular/router';
import {AuthService} from 'ng2-ui-auth';
import {FormHelperService} from '../../service/form-helper.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public isLoggedIn = false;
  public dataValues = ['Other', 'Male', 'Female'];
  public modelForm: FormGroup;
  public form: FormGroup;

  constructor(private fb: FormBuilder, private sharedService: SharedService, private auth: AuthService,
              private router: Router,
              public fh: FormHelperService) {
  }

  ngOnInit() {
    this.modelForm = this.fb.group({
      genderInfo: new FormControl('', [Validators.required])
    });

    this.form = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  public onChange(val) {
    // console.log('Changed Val is :: ', val);
    this.sharedService.setLogged(true);
    this.isLoggedIn = true;
  }

  public onGoButtonClick(): void {
    this.sharedService.setLogged(true);
  }

  login(loginData: { username: string, password: string }) {
    this.auth.login(loginData)
      .subscribe({
        next: (response) => {
          this.auth.setToken(response.token);
          // console.log('token is   ', response.token);
          this.sharedService.setLogged(true);
        },
        error: (err: any) => alert(err.message),
        complete: () => this.router.navigateByUrl('')
      });
  } 
}
