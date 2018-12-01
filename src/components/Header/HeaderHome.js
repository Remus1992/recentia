import React from "react";

import HeaderNavHome from './HeaderNavItems/HeaderNavHome';

import classes from "./Header.css";

const headerHome = (props) => (
    <div className={classes.recentia_header}>
        <h1>Recentia</h1>
        <nav className={classes.header_nav}>
            <HeaderNavHome/>
        </nav>
    </div>
);

export default headerHome;