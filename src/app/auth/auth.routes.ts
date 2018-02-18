import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ForgotComponent} from './forgot/forgot.component';
import {ResetComponent} from './reset/reset.component';
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
    path: 'auth/forgot',
    component: ForgotComponent
  },
  {
    path: 'auth/reset',
    component: ResetComponent
  }
];

export const AUTH_ROUTES = RouterModule.forChild(AUTH_ROUTERS);
