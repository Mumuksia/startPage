"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var dashboard_component_1 = require('./links/dashboard.component');
var bookmarks_component_1 = require('./links/bookmarks.component');
var bookmark_detail_component_1 = require('./links/bookmark-detail.component');
var bookmark_service_1 = require('./links/bookmark.service');
var treirod_component_1 = require('./treirod/treirod.component');
var compiler_component_1 = require('./compiler/compiler.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Bookmarks';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n      <a [routerLink]=\"['Bookmarks']\">Bookmarks</a>\n      <a [routerLink]=\"['TreIRod']\">Tre i Rod</a>\n      <a [routerLink]=\"['Compiler']\">Java Compiler</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            styleUrls: ['app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                bookmark_service_1.BookmarkService,
            ]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/treirod', name: 'TreIRod', component: treirod_component_1.TreIRodComponent },
            { path: '/compiler', name: 'Compiler', component: compiler_component_1.CompilerComponent },
            { path: '/links/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
            { path: '/links/detail/:id', name: 'BookmarkDetail', component: bookmark_detail_component_1.BookmarkDetailComponent },
            { path: '/links/bookmarks', name: 'Bookmarks', component: bookmarks_component_1.BookmarksComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map