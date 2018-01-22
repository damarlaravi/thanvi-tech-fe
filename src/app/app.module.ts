import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_ROUTES} from './app.routes';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedService} from './service/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    APP_ROUTES,
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
