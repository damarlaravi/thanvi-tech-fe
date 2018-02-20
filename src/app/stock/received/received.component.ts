import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss']
})
export class ReceivedComponent implements OnInit {
  public receivedForm:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.receivedForm = this.fb.group({
      date: ['', [Validators.required]],
      product: ['', [Validators.required]],
      model: ['', [Validators.required]],
      unitRate: ['', [Validators.required]],
      qty: ['', [Validators.required]]
    })
  }

}
