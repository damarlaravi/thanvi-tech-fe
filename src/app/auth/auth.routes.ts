import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {SignOutComponent} from './sign-out/sign-out.component';

export const AUTH_ROUTERS: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'auth/sign-out',
    component: SignOutComponent
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
