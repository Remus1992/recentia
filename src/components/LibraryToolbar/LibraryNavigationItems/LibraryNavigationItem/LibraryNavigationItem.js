import React from 'react';
import {NavLink} from "react-router-dom";

import classes from './LibraryNavigationItem.css';


const libraryNavigationItem = (props) => (
    <li className={classes.recentia_search_li}>
        <NavLink
            to={props.link}
            exact
            activeClassName={classes.active}
        >{props.children}</NavLink>
    </li>
);
export default libraryNavigationItem;

