export class InMemoryDataService {
  createDb() {
    let bookmarks = [
      {"id": "11", "link": 'Mr. Nice', "description": 'Some desc', "category": 'some category'},
      {"id": "112", "link": 'Mr. qaqqNice', "description": 'Sqqqqome desc', "category": 'aaaasome category'}
];
    return {bookmarks};    
  }
}
