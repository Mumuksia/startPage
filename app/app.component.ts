import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent }  from './links/dashboard.component';
import { HeroesComponent }     from './links/heroes.component';
import { HeroDetailComponent } from './links/hero-detail.component';
import { HeroService }         from './links/hero.service';
import { TreIRodComponent }     from './treirod.component';
import { CompilerComponent }     from './compiler.component';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
      <a [routerLink]="['TreIRod']">Tre i Rod</a>
      <a [routerLink]="['Compiler']">Java Compiler</a>
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
  { path: '/treirod',     name: 'TreIRod',     component: TreIRodComponent },
  { path: '/compiler',     name: 'Compiler',     component: CompilerComponent },
  { path: '/links/dashboard',  name: 'Dashboard',  component: DashboardComponent, useAsDefault: true },
  { path: '/links/detail/:id', name: 'HeroDetail', component: HeroDetailComponent },
  { path: '/links/heroes',     name: 'Heroes',     component: HeroesComponent }
])
export class AppComponent {
  title = 'Tour of Heroes';
}
