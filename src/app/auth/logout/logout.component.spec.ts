import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import { Ng2UiAuthModule, AuthService } from 'ng2-ui-auth';
import { environment } from '../../../environments/environment';
import { SpinnerService } from '../../service/spinner.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LogOutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutComponent ],
      imports: [Ng2UiAuthModule.forRoot({
        baseUrl: environment.API_URL,
        tokenPrefix: 'thanvi-tech',
        loginUrl: '/auth/login',
        signupUrl: '/auth/signup'
      }), RouterTestingModule.withRoutes([])],
      providers: [AuthService, SpinnerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
