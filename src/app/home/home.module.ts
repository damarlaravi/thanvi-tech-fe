import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HOME_ROUTES} from './home.router';

@NgModule({
  declarations: [HomeComponent],
  imports: [HOME_ROUTES],
})

export class HomeModule {
}
