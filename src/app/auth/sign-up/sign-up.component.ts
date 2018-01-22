import {Component, OnInit} from '@angular/core';
import {FormHelperService} from '../../service/form-helper.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'ng2-ui-auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public form: FormGroup;

  constructor(private auth: AuthService,
              private router: Router,
              private fb: FormBuilder,
              public fh: FormHelperService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      'username': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'password-group': new FormGroup(
        {
          'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
          'confirm-password': new FormControl('')
        },
        (c: FormGroup) =>
          c.value['password'] === c.value['confirm-password'] ?
            null :
            {'pass-confirm': true}
      )
    });
  }

  signUp(signUpData: any) {
    this.auth.signup({
      username: signUpData['username'],
      password: signUpData['password-group']['password']
    })
      .subscribe({
        next: (response) => this.auth.setToken(response.access_token),
        error: (err: any) => alert(err.message),
        complete: () => this.router.navigateByUrl('main')
      });
  }
}
