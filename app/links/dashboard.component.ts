import { Component, OnInit } from '@angular/core';

import { Bookmark } from './bookmark';
import { BookmarkService } from './bookmark.service';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/links/dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  bookmarks: Bookmark[] = [];
  constructor(
  private router: Router,
  private bookmarkService: BookmarkService) {
}
  ngOnInit() {
    this.bookmarkService.getBookmarks()
      .then(bookmarks => this.bookmarks = bookmarks.slice(1,5));
  }
  gotoDetail(bookmark: Bookmark) {
  let link = ['BookmarkDetail', { id: bookmark.id }];
  this.router.navigate(link);
}
}
