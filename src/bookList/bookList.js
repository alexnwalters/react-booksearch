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
            </div>
        )
    }
}

export default BookList