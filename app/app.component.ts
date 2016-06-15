import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent }  from './links/dashboard.component';
import { HeroesComponent }     from './links/heroes.component';
import { HeroDetailComponent } from './links/hero-detail.component';
import { HeroService }         from './links/hero.service';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService,
  ]
})
@RouteConfig([
  { path: '/links/dashboard',  name: 'Dashboard',  component: DashboardComponent, useAsDefault: true },
  { path: '/links/detail/:id', name: 'HeroDetail', component: HeroDetailComponent },
  { path: '/links/heroes',     name: 'Heroes',     component: HeroesComponent }
])
export class AppComponent {
  title = 'Tour of Heroes';
}
