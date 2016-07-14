import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Bookmark } from './bookmark';
import { Category } from './category';
@Injectable()
export class BookmarkService {
  private bookmarkUrl = 'app/bookmarks';  // URL to web api
  constructor(private http: Http) { }
  getBookmarks(): Promise<Bookmark[]> {
    return this.http.get(this.bookmarkUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }
  
  getCategories(): Promise<Bookmark[]> {
     return this.http.get(this.bookmarkUrl)
               .toPromise()
               .then(response => response.json().data)               
               .catch(this.handleError);
    
  }
  getBookmark(id: number) {
    return this.getBookmarks()
               .then(bookmarks => bookmarks.filter(bookmark => bookmark.id === id)[0]);
  }
  save(bookmark: Bookmark): Promise<Bookmark>  {
    if (bookmark.id) {
     return this.put(bookmark);
    }
    return this.post(bookmark);
  }
  delete(bookmark: Bookmark) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.bookmarkUrl}/${bookmark.id}`;
    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  private post(bookmark: Bookmark): Promise<Bookmark> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.bookmarkUrl, JSON.stringify(bookmark), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private put(bookmark: Bookmark) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.bookmarkUrl}/${bookmark.id}`;
    return this.http
               .put(url, JSON.stringify(bookmark), {headers: headers})
               .toPromise()
               .then(() => bookmark)
               .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
