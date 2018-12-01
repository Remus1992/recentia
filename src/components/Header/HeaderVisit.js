import React from "react";

import HeaderNavVisit from './HeaderNavItems/HeaderNavVisit';

import classes from "./Header.css";

const headerVisit = (props) => (
    <div className={classes.recentia_header}>
        <h1>Recentia Clinical Library</h1>
        <nav className={classes.header_nav}>
            <HeaderNavVisit />
        </nav>
    </div>
);

export default headerVisit;