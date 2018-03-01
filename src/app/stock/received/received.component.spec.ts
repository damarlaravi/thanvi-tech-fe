import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedComponent } from './received.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TechnoService } from '../../service/techno.service';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MAT_DATE_LOCALE,
  DateAdapter,
  MAT_DATE_FORMATS,
  MatNativeDateModule,
  MatInputModule
} from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS } from '../../util/date-format';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ReceivedComponent', () => {
  let component: ReceivedComponent;
  let fixture: ComponentFixture<ReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
        MatNativeDateModule
      ],
      providers: [TechnoService],
      declarations: [ReceivedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
