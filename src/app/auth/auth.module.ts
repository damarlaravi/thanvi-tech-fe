import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ForgotComponent} from './forgot/forgot.component';
import {ResetComponent} from './reset/reset.component';
import {AUTH_ROUTES} from './auth.routes';
import {LogoutComponent} from './logout/logout.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormHelperService} from '../service/form-helper.service';
import {TechnoService} from '../service/techno.service';

@NgModule({
  imports: [
    CommonModule, AUTH_ROUTES, ReactiveFormsModule,
  ],
  declarations: [LoginComponent,
    SignUpComponent,
    ForgotComponent,
    ResetComponent,
    LogoutComponent
  ],
  exports: [LoginComponent],
  providers: [FormHelperService, TechnoService]
})
export class AuthModule {
}
