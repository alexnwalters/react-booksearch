import React, {Component} from 'react';
import SearchBar from './searchBar/searchBar'
import BookList from './bookList/bookList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <SearchBar />
        <BookList />
      </div>
    );
  }
}

export default App;

