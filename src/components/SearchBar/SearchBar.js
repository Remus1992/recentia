import React from 'react';
import classes from "./SearchBar.css";

const searchBar = () => (
    <div className={classes.recentia_search_wrapper}>
        <form>
            <input
                type="text"
                placeholder="Search"
                className={classes.search_bar}/>
        </form>
    </div>
);

export default searchBar;