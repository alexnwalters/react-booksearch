import React from 'react';
import './book.css';

export default function Book(props) {    
    return(
        <div className='book'>
            <h2>{props.books.items[0].volumeInfo.title}</h2>
            <img src='' alt='' />
            <ul>
                <li>Author:</li>
                <li>Price:</li>
            </ul>
            <p>Description</p>
        </div>
    )
}
