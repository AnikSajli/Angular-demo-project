import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$ = new BehaviorSubject<boolean>(false) ;
  isLoggedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
     this.authService.isLoggedIn.subscribe(response => {
       debugger
       this.isLoggedIn = response;
     });
  }
}
