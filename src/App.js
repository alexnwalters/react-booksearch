import React, {Component} from 'react';
import SearchBar from './searchBar/searchBar'
import BookList from './bookList/bookList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {
        items: []
      },
      query: ''
    }
  }

  handleSearch(search) {
    this.setState({
      query: search
    })

    const volumes = 'https://www.googleapis.com/books/v1/volumes';
    const key = 'AIzaSyBv0U334oDP9_CljGZF1CiAPF-2KHQtL1g';
    const query = this.state.query;
    const url = volumes + '?key=' + key + '&q=' + query

    console.log(url)

    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong');
        }
        return response;
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          books: response
        });
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <SearchBar handleSearch ={ search => this.handleSearch(search)}/>
        <BookList books={this.state.books}/>
      </div>
    );
  }
}

export default App;

