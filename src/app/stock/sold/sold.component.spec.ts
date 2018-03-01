import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldComponent } from './sold.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TechnoService } from '../../service/techno.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatNativeDateModule,
  MatInputModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SoldComponent', () => {
  let component: SoldComponent;
  let fixture: ComponentFixture<SoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        NoopAnimationsModule,
        MatDatepickerModule, 
        MatNativeDateModule
      ],
      providers: [TechnoService],
      declarations: [SoldComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
