import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';

const HOME_ROUTERS: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

export const HOME_ROUTES = RouterModule.forChild(HOME_ROUTERS);
