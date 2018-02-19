import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TechnoService} from '../../service/techno.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  public forgotForm: FormGroup;

  constructor(private fb: FormBuilder, private technoService: TechnoService) {
  }

  ngOnInit() {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3), Validators.email]]
    });
  }

  public onForgot(): void {
    if (this.forgotForm.valid) {
      const email = this.forgotForm.value;
      this.technoService.forgotPassword(email).subscribe((resp) => {
        console.log(' resp is ', resp);
      },
      (err: HttpErrorResponse) => console.log(err)
      );
    } else {
      console.log('this.forgotForm is valid ', this.forgotForm.valid);
    }
  }

  public onReset(): void {
    this.forgotForm.reset();
  }
}
