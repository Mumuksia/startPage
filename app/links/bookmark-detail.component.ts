import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Bookmark }        from './bookmark';
import { BookmarkService } from './bookmark.service';
@Component({
  selector: 'my-bookmark-detail',
  templateUrl: 'app/links/bookmark-detail.component.html',
  styleUrls: ['app/links/bookmark-detail.component.css']
})
export class BookmarkDetailComponent implements OnInit {
  @Input() bookmark: Bookmark;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here
  constructor(
    private bookmarkService: BookmarkService,
    private routeParams: RouteParams) {
  }
  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      var id = this.routeParams.get('id');
      this.navigated = true;
      this.bookmarkService.getBookmark(id)
          .then(bookmark => this.bookmark = bookmark);
    } else {
      this.navigated = false;
      this.bookmark = new Bookmark();
    }
  }
  save() {
    this.bookmarkService
        .save(this.bookmark)
        .then(bookmark => {
          this.bookmark = bookmark; // saved bookmark, w/ id if new
          this.goBack(bookmark);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  goBack(savedBookmark: Bookmark = null) {
    this.close.emit(savedBookmark);
    if (this.navigated) { window.history.back(); }
  }
}
