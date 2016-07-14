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
var bookmark_1 = require('./bookmark');
var bookmark_service_1 = require('./bookmark.service');
var BookmarkDetailComponent = (function () {
    function BookmarkDetailComponent(bookmarkService, routeParams) {
        this.bookmarkService = bookmarkService;
        this.routeParams = routeParams;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    BookmarkDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routeParams.get('id') !== null) {
            var id = +this.routeParams.get('id');
            this.navigated = true;
            this.bookmarkService.getBookmark(id)
                .then(function (bookmark) { return _this.bookmark = bookmark; });
        }
        else {
            this.navigated = false;
            this.bookmark = new bookmark_1.Bookmark();
        }
    };
    BookmarkDetailComponent.prototype.save = function () {
        var _this = this;
        this.bookmarkService
            .save(this.bookmark)
            .then(function (bookmark) {
            _this.bookmark = bookmark; // saved bookmark, w/ id if new
            _this.goBack(bookmark);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    BookmarkDetailComponent.prototype.goBack = function (savedBookmark) {
        if (savedBookmark === void 0) { savedBookmark = null; }
        this.close.emit(savedBookmark);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', bookmark_1.Bookmark)
    ], BookmarkDetailComponent.prototype, "bookmark", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BookmarkDetailComponent.prototype, "close", void 0);
    BookmarkDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-bookmark-detail',
            templateUrl: 'app/links/bookmark-detail.component.html',
            styleUrls: ['app/links/bookmark-detail.component.css']
        }), 
        __metadata('design:paramtypes', [bookmark_service_1.BookmarkService, router_deprecated_1.RouteParams])
    ], BookmarkDetailComponent);
    return BookmarkDetailComponent;
}());
exports.BookmarkDetailComponent = BookmarkDetailComponent;
//# sourceMappingURL=bookmark-detail.component.js.map