import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TechnoService} from '../../service/techno.service';
import {matchValidator} from '../../validator/custom.validator';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  public resetForm: FormGroup;
  private token: string;

  constructor(private fb: FormBuilder, private technoService: TechnoService,
              private activateRoute: ActivatedRoute, private route: Router) {
    this.activateRoute.queryParams.subscribe(params => {
      // console.log(params); // {order: "popular"}
      this.token = params.token;
      // console.log(this.token); // popular
    });
  }

  ngOnInit() {
    this.resetForm = this.fb.group({
      password: ['', [Validators.required]],
      confirm: ['', [Validators.required, matchValidator('password')]]
    });
  }

  public onResetPassword(): void {
    if (this.resetForm.valid) {
      const password = this.resetForm.get('password').value;
      this.technoService.setNewPassword(password, this.token).subscribe((res) => {
        console.log(' response is :: ', res);
      }, err => console.log(' Error is :: ', err),
        () => {
        this.route.navigate(['/login']);
        });
    }
  }

  public onReset(): void {

  }
}
