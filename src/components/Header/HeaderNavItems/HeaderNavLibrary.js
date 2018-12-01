import React from 'react';

import HeaderNavItem from './HeaderNavItem/HeaderNavItem';

import classes from './HeaderNav.css';

const headerNavLibrary = () => (
    <ul className={classes.header_ul}>
        <HeaderNavItem link='/clinical_library'>Clinical Library</HeaderNavItem>
        <li className={classes.header_li_break}>
            <p style={{"color": "white", "margin": "0"}}>|</p>
        </li>
        <HeaderNavItem link='/clinical_visit_support'>Clinical Visit Support</HeaderNavItem>
    </ul>
);

export default headerNavLibrary;