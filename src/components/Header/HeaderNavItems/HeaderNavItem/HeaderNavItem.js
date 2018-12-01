import React from 'react';

import {NavLink} from "react-router-dom";

import classes from './HeaderNavItem.css';

const headerNavItem = (props) => (
    <li className={classes.header_li}>
        <NavLink
            to={props.link}
            exact
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
);

export default headerNavItem;