import React from 'react';

import HeaderNavItem from './HeaderNavItem/HeaderNavItem';

import classes from './HeaderNav.css';

const headerNavVisit = () => (
    <ul className={classes.header_ul}>
        <HeaderNavItem link='/'>Home</HeaderNavItem>
        <li className={classes.header_li_break}>
            <p style={{"color": "white", "margin": "0"}}>|</p>
        </li>
        <HeaderNavItem link='/clinical_library'>Clinical Library</HeaderNavItem>
    </ul>
);

export default headerNavVisit;