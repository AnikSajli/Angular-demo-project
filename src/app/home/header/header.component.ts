import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {debounce, filter, map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  visibility = false;

  constructor(private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // this.authService.isLoggedIn.subscribe(response => {
    //   this.isLoggedIn = response;
    // });

    this.router.events.pipe(
      filter((events: any) => events instanceof NavigationEnd),
      map(evt => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }))
      .pipe(
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data))
      .subscribe(x =>
      {
        if (x.header === true) {
          this.visibility = true;
        }
        else {
          this.visibility = false;
        }
      });
  }
}

