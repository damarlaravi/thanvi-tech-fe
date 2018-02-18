import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {LogoutComponent} from './logout/logout.component';

export const AUTH_ROUTERS: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'auth/logout',
    component: LogoutComponent
  },
  {
    path: 'auth/forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'auth/reset-password',
    component: ResetPasswordComponent
  }
];

export const AUTH_ROUTES = RouterModule.forChild(AUTH_ROUTERS);
