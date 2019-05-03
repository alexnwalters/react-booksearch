import React, {Component} from 'react';
import SearchBar from './searchBar/searchBar'
import BookList from './bookList/bookList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      showResults: true
    }
  }

  handleSearch(search){    
    const p1 = new Promise((resolve, reject) => {
      this.setState({
        query: search,
      })
      resolve();
    });

    p1.then(() => {
      const volumes = 'https://www.googleapis.com/books/v1/volumes';
      const key = 'AIzaSyBv0U334oDP9_CljGZF1CiAPF-2KHQtL1g';
      const query = this.state.query;
      const url = volumes + '?key=' + key + '&q=' + query
      
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
        })
        console.log(this.state.books.items[0].volumeInfo.title)
        console.log(this.state.books);
        return response;
      })
      .catch(error => {
        console.log(error)
      });
    })
    .then(() => {
      this.setState({
        showResults: false
      });
    });
  }

  render() {
    const page = this.state.showResults
      ? <SearchBar handleSearch ={ search => this.handleSearch(search)}/>
      : <>
        <SearchBar handleSearch ={ search => this.handleSearch(search)}/>
        <BookList books={this.state.books}/>
        </>

    return (
      <div className="App">
        <h1>Google Book Search</h1>
        { page }
      </div>
    );
  }
}

export default App;

