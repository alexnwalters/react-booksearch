import React, {Component} from 'react';
import './searchBar.css'

class SearchBar extends Component {
    render() {
        return(
            <div className='searchBar'>
                <form>
                    <label> Search:
                        <input type='text'></input>
                        <input type='submit'></input>
                    </label>
                    <label> Print Type:
                        <select>
                            <option value='All'>All</option>
                        </select>
                    </label>
                    <label> Book Type:
                        <select>
                            <option value='No Filter'>No Filter</option>
                        </select>
                    </label>

                </form>
            </div>
        )
    }
}

export default SearchBar