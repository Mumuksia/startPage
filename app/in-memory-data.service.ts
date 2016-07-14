export class InMemoryDataService {
  createDb() {
    let bookmarks = [
      {id: 11, link: 'Mr. Nice', description: 'Some desc', category: 'some category'},
      {id: 12, link: 'Narco', description: 'Some desc', category: 'some category'},
      {id: 13, link: 'Bombasto', description: 'Some desc', category: 'some category'},
      {id: 14, link: 'Celeritas', description: 'Some desc', category: 'some category'},
      {id: 15, link: 'Magneta', description: 'Some desc', category: 'some category'},
      {id: 16, link: 'RubberMan', description: 'Some desc', category: 'some category'},
      {id: 17, link: 'Dynama', description: 'Some desc', category: 'some category'},
      {id: 18, link: 'Dr IQ', description: 'Some desc', category: 'some category'},
      {id: 19, link: 'Magma', description: 'Some desc', category: 'some category'}
];
    return {bookmarks};    
  }
}
