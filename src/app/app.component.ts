import { Component } from '@angular/core';


@Component({
  selector: 'pm-root',
  // templateUrl : './welcome.component.html'
  template: `
  <nav class="navbar navbar-expands navbar-light bg-light">
    <a class="navbar-brand">{{pageTitle}} </a>
    <ul class="nav nav-pills">
        <li><a class="nav-link" [routerLink]="['/welcome']">Home</a></li>
        <li><a class="nav-link" [routerLink]="['/products']">Product</a></li>
    </ul>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}