import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent }  from './links/dashboard.component';
import { BookmarksComponent }     from './links/bookmarks.component';
import { BookmarkDetailComponent } from './links/bookmark-detail.component';
import { BookmarkService }         from './links/bookmark.service';
import { TreIRodComponent }     from './treirod/treirod.component';
import { CompilerComponent }     from './compiler/compiler.component';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Bookmarks']">Bookmarks</a>
      <a [routerLink]="['Dashboard']">Dashboard</a>      
      <a [routerLink]="['TreIRod']">Tre i Rod</a>
      <a [routerLink]="['Compiler']">Java Compiler</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    BookmarkService,
  ]
})
@RouteConfig([
  { path: '/treirod',     name: 'TreIRod',     component: TreIRodComponent },
  { path: '/compiler',     name: 'Compiler',     component: CompilerComponent },
  { path: '/links/dashboard',  name: 'Dashboard',  component: DashboardComponent, useAsDefault: true },
  { path: '/links/detail/:id', name: 'BookmarkDetail', component: BookmarkDetailComponent },
  { path: '/links/bookmarks',     name: 'Bookmarks',     component: BookmarksComponent }
])
export class AppComponent {
  title = 'Tour of Bookmarks';
}
