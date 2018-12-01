import React from 'react';

import HeaderNavItem from './HeaderNavItem/HeaderNavItem';

import classes from './HeaderNavItems.css';

const headerNavItems = (props) => (
    <ul className={classes.header_ul}>
        <HeaderNavItem link={props.l1}>{props.title1}</HeaderNavItem>
        <li className={classes.header_li_break}>
            <p style={{"color": "white", "margin": "0"}}>|</p>
        </li>
        <HeaderNavItem link={props.l2}>{props.title2}</HeaderNavItem>
    </ul>
);

export default headerNavItems;