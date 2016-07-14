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
var bookmark_service_1 = require('./bookmark.service');
var bookmark_detail_component_1 = require('./bookmark-detail.component');
var BookmarksComponent = (function () {
    function BookmarksComponent(router, bookmarkService) {
        this.router = router;
        this.bookmarkService = bookmarkService;
        this.addingBookmark = false;
    }
    BookmarksComponent.prototype.getBookmarks = function () {
        var _this = this;
        this.bookmarkService
            .getBookmarks()
            .then(function (bookmarks) { return _this.bookmarks = bookmarks; })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    BookmarksComponent.prototype.addBookmark = function () {
        this.addingBookmark = true;
        this.selectedBookmark = null;
    };
    BookmarksComponent.prototype.close = function (savedBookmark) {
        this.addingBookmark = false;
        if (savedBookmark) {
            this.getBookmarks();
        }
    };
    BookmarksComponent.prototype.delete = function (bookmark, event) {
        var _this = this;
        event.stopPropagation();
        this.bookmarkService
            .delete(bookmark)
            .then(function (res) {
            _this.bookmarks = _this.bookmarks.filter(function (h) { return h !== bookmark; });
            if (_this.selectedBookmark === bookmark) {
                _this.selectedBookmark = null;
            }
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    BookmarksComponent.prototype.ngOnInit = function () {
        this.getBookmarks();
    };
    BookmarksComponent.prototype.onSelect = function (bookmark) {
        this.selectedBookmark = bookmark;
        this.addingBookmark = false;
    };
    BookmarksComponent.prototype.gotoDetail = function () {
        this.router.navigate(['BookmarkDetail', { id: this.selectedBookmark.id }]);
    };
    BookmarksComponent = __decorate([
        core_1.Component({
            selector: 'my-bookmarks',
            templateUrl: 'app/links/bookmarks.component.html',
            styleUrls: ['app/links/bookmarks.component.css'],
            directives: [bookmark_detail_component_1.BookmarkDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, bookmark_service_1.BookmarkService])
    ], BookmarksComponent);
    return BookmarksComponent;
}());
exports.BookmarksComponent = BookmarksComponent;
//# sourceMappingURL=bookmarks.component.js.map