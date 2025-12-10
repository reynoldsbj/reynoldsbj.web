import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavRoute } from '../../classes/nav-route/nav-route';
import { CommonModule, NgFor, Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [NgFor, CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  route: string = "";
  routes: NavRoute[] = [
    new NavRoute('Home', '/home'),
    new NavRoute('Contact', '/contact')
  ];

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path() !== '') {
        this.route = location.path();
      } else {
        this.route = '/home';
      }
    });
  }

  isActive(pageName: string): boolean {
    return pageName === this.route;
  }
}
