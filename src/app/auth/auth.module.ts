import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {AUTH_ROUTES} from './auth.routes';
import {SignOutComponent} from './sign-out/sign-out.component';
import {SharedService} from '../service/shared.service';
import {ReactiveFormsModule} from '@angular/forms';
import {Ng2UiAuthModule} from 'ng2-ui-auth';
import {FormHelperService} from '../service/form-helper.service';
import {JsonInterceptorService} from '../service/json-interceptor.service';
import {environment} from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule, AUTH_ROUTES, ReactiveFormsModule,
  ],
  declarations: [SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SignOutComponent
  ],
  exports: [SignInComponent],
  providers: [FormHelperService]
})
export class AuthModule {
}
