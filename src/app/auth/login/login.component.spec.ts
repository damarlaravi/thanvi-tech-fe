import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TechnoService } from '../../service/techno.service';
import { FormHelperService } from '../../service/form-helper.service';
import { AuthService, SharedService, StorageService, ConfigService, Ng2UiAuthModule } from 'ng2-ui-auth';
import { SpinnerService } from '../../service/spinner.service';
import { environment } from '../../../environments/environment';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule.withRoutes([]), ReactiveFormsModule, Ng2UiAuthModule.forRoot({
        baseUrl: environment.API_URL,
        tokenPrefix: 'thanvi-tech',
        loginUrl: '/auth/login',
        signupUrl: '/auth/signup'
      })],
      providers: [TechnoService, FormHelperService, AuthService, 
        SpinnerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
