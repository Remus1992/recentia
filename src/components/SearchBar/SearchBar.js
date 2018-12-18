import React, {Component} from 'react';
import classes from "./SearchBar.css";

import {
    // updateText,
    handleInputChange,
    // getInfo
} from '../../containers/RecentiaClinicalLibrary/Metathesaurus/Metathesaurus';

class SearchBar extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className={classes.recentia_search_wrapper}>
                <form>
                    <input
                        type="text"
                        placeholder="Search"
                        // onChange={(e) => updateText(e.target.value)}
                        onChange={(e) => handleInputChange(e.target.value)}
                        // onChange={handleInputChange}
                        className={classes.search_bar}/>
                </form>
            </div>
        )
    }
}

export default SearchBar;