import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginMode = true;
  constructor() { }

  ngOnInit(): void {
  }

  onLoginModeChange($event: boolean) {
    this.loginMode = false;
    debugger
  }

  onSignupModeChange($event: boolean) {
    this.loginMode = true;
    debugger
  }
}
