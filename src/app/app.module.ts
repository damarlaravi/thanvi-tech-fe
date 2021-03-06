import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_ROUTES } from './app.routes';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceInterceptor } from './service/service.interceptor';
import { AuthService, Ng2UiAuthModule } from 'ng2-ui-auth';
import { environment } from '../environments/environment';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatDialogModule } from '@angular/material';
import { TechnoService } from './service/techno.service';
import { SpinnerService } from './service/spinner.service';
import { NumberOnlyDirective } from './directive/numberOnly.directive';
import { DailogComponent, DialogOvervieweComponent } from './dailog/dailog.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent,
    DailogComponent,
    DialogOvervieweComponent
  ],
  imports: [
    Ng2UiAuthModule.forRoot({
      baseUrl: environment.API_URL,
      tokenPrefix: 'thanvi-tech',
      loginUrl: '/auth/login',
      signupUrl: '/auth/signup'
    }),
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    APP_ROUTES,
    FlexLayoutModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServiceInterceptor,
    multi: true
  }, AuthService, TechnoService, SpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
