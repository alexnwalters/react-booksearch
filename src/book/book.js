import React from 'react';
import './book.css';

class Book extends React.Component {
    static defaultProps = {
        book: {
            volumeInfo: {
                title: "",
                imageLinks: {
                    smallThumbnail: ""
                },
                authors: [],
                description: ""
            },
            saleInfo: {
                listPrice: {
                    amount: "",
                    currencyCode: ""
                }        
            }
        } 
    }

    render() {        
        return(
            <div className='book'>
                <h2>{this.props.book.volumeInfo.title}</h2>
                <img src={this.props.book.volumeInfo.imageLinks.smallThumbnail} alt='' />
                <ul>
                    <li>Author: {this.props.book.volumeInfo.authors[0]}</li>
                    <li>Price: {this.props.book.saleInfo.listPrice.amount}{this.props.book.saleInfo.listPrice.currencyCode}</li>
                </ul>
                <p>{this.props.book.volumeInfo.description}</p>
            </div>
        )
    }
}

export default Book

