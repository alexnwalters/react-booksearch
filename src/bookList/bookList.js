import React, { Component } from 'react';
import Book from '../book/book'
import './bookList.css';

class BookList extends Component {
    static defaultProps = {
        books: {
            items: []
        }
    }

    render() {
        return(
            <div className='bookList'>
                <Book book={this.props.books.items[0]}/>
            </div>
        )
    }
}

export default BookList