import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailMatcher } from './validator/email-matcher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: FormGroup;
  constructor(public fb: FormBuilder) {}
  ngOnInit() {
    this.user = this.fb.group({
      name: ['', Validators.required],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      }, { validator: emailMatcher })
    });
  }
  onSubmit({ value, valid }) {
    console.log(value, valid);
  }
}
