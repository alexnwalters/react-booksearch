import React, { Component } from 'react';
import Book from '../book/book'
import './bookList.css';

class BookList extends Component {
    render() {
        return(
            <div className='bookList'>
                <Book />
            </div>
        )
    }
}

export default BookList