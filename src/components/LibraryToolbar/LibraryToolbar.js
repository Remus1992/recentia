import React from 'react';

import classes from './LibraryToolbar.css';
import LibraryNavigationItems from './LibraryNavigationItems/LibraryNavigationItems';

const libraryToolbar = (props) => (
    <nav className={classes.recentia_search_nav}>
        <LibraryNavigationItems/>
    </nav>
);

export default libraryToolbar;

