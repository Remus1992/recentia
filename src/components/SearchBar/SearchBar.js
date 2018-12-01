import React from 'react';
import classes from "./SearchBar.css";

const searchBar = () => (
    <div className={classes.recentia_search_wrapper}>
        <input
            type="text"
            placeholder="Search"
            className={classes.search_bar}/>
    </div>
);

export default searchBar;