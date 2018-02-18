import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {AUTH_ROUTES} from './auth.routes';
import {LogoutComponent} from './logout/logout.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormHelperService} from '../service/form-helper.service';

@NgModule({
  imports: [
    CommonModule, AUTH_ROUTES, ReactiveFormsModule,
  ],
  declarations: [LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    LogoutComponent
  ],
  exports: [LoginComponent],
  providers: [FormHelperService]
})
export class AuthModule {
}
