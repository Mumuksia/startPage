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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var BookmarkService = (function () {
    function BookmarkService(http) {
        this.http = http;
        this.bookmarkUrl = 'app/bookmarks'; // URL to web api
    }
    BookmarkService.prototype.getBookmarks = function () {
        return this.http.get(this.bookmarkUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    BookmarkService.prototype.getCategories = function () {
        return this.http.get(this.bookmarkUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    BookmarkService.prototype.getBookmark = function (id) {
        return this.getBookmarks()
            .then(function (bookmarks) { return bookmarks.filter(function (bookmark) { return bookmark.id === id; })[0]; });
    };
    BookmarkService.prototype.save = function (bookmark) {
        if (bookmark.id) {
            return this.put(bookmark);
        }
        return this.post(bookmark);
    };
    BookmarkService.prototype.delete = function (bookmark) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.bookmarkUrl + "/" + bookmark.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    BookmarkService.prototype.post = function (bookmark) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.bookmarkUrl, JSON.stringify(bookmark), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    BookmarkService.prototype.put = function (bookmark) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.bookmarkUrl + "/" + bookmark.id;
        return this.http
            .put(url, JSON.stringify(bookmark), { headers: headers })
            .toPromise()
            .then(function () { return bookmark; })
            .catch(this.handleError);
    };
    BookmarkService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    BookmarkService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BookmarkService);
    return BookmarkService;
}());
exports.BookmarkService = BookmarkService;
//# sourceMappingURL=bookmark.service.js.map