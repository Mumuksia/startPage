import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';
import { Bookmark }                from './bookmark';
import { BookmarkService }         from './bookmark.service';
import { BookmarkDetailComponent } from './bookmark-detail.component';
@Component({
  selector: 'my-bookmarks',
  templateUrl: 'app/links/bookmarks.component.html',
  styleUrls:  ['app/links/bookmarks.component.css'],
  directives: [BookmarkDetailComponent]
})
export class BookmarksComponent implements OnInit {
  bookmarks: Bookmark[];
  selectedBookmark: Bookmark;
  addingBookmark = false;
  error: any;
  constructor(
    private router: Router,
    private bookmarkService: BookmarkService) { }
  getBookmarks() {
    this.bookmarkService
        .getBookmarks()
        .then(bookmarks => this.bookmarks = bookmarks)
        .catch(error => this.error = error); // TODO: Display error message
  }
  addBookmark() {
    this.addingBookmark = true;
    this.selectedBookmark = null;
  }
  close(savedBookmark: Bookmark) {
    this.addingBookmark = false;
    if (savedBookmark) { this.getBookmarks(); }
  }
  delete(bookmark: Bookmark, event: any) {
    event.stopPropagation();
    this.bookmarkService
        .delete(bookmark)
        .then(res => {
          this.bookmarks = this.bookmarks.filter(h => h !== bookmark);
          if (this.selectedBookmark === bookmark) { this.selectedBookmark = null; }
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  ngOnInit() {
    this.getBookmarks();
  }
  onSelect(bookmark: Bookmark) {
    this.selectedBookmark = bookmark;
    this.addingBookmark = false;
  }
  gotoDetail() {
    this.router.navigate(['BookmarkDetail', { id: this.selectedBookmark.id }]);
  }
}
