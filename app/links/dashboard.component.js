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
var bookmark_service_1 = require('./bookmark.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var DashboardComponent = (function () {
    function DashboardComponent(router, bookmarkService) {
        this.router = router;
        this.bookmarkService = bookmarkService;
        this.bookmarks = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookmarkService.getCategories()
            .then(function (bookmarks) { return _this.bookmarks = bookmarks; });
    };
    DashboardComponent.prototype.gotoDetail = function (bookmark) {
        var link = ['BookmarkDetail', { id: bookmark.id }];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/links/dashboard.component.html',
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, bookmark_service_1.BookmarkService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map