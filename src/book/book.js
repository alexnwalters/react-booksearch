import React, { Component } from 'react';
import './book.css';

class Book extends Component {
    render() {
        return(
            <div className='book'>
                <h2>Book Title</h2>
                <img src='' alt='' />
                <ul>
                    <li>Author:</li>
                    <li>Price:</li>
                </ul>
                <p>Description</p>
            </div>
        )
    }
}

export default Book