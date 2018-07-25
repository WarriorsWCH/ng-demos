import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface User {
  username: string; // 必填，5-8个字符
  email: string; // 必填，有效的email格式
  password: string; // 必填，值要与confirmPassword值一样
  confirmPassword: string; // 必填，值要与password值一样
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public user: FormGroup;

  constructor(public fb: FormBuilder) { }


  ngOnInit() {
    this.user = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5),
                      Validators.maxLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  saveUser(): void {
    console.log(this.user);
  }
}

