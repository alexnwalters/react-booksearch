import React, {Component} from 'react';
import './searchBar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    queryChange(query) {
        this.setState({
            query
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const search = this.state.query
        this.props.handleSearch(search);
    }

    render() {
        return(
            <div className='searchBar'>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor='search'>Search:</label>
                        <input 
                            type='text'
                            name='search'
                            id='search'
                            placeholder='search'
                            value={this.state.query}
                            onChange={e => this.queryChange(e.target.value)}
                            required/>
                        <button type='submit'>Search</button>
                    <label htmlFor='print'>Print Type:</label>
                        <select
                            name='print'
                            id='print'>
                            <option value='All'>All</option>
                        </select>
                    <label htmlFor='book'>Book Type:</label>
                        <select
                            name='book'
                            id='book'>
                            <option value='No Filter'>No Filter</option>
                        </select>
                </form>
            </div>
        )
    }
}

export default SearchBar