import React from "react";

import HeaderNavLibrary from './HeaderNavItems/HeaderNavLibrary';

import classes from "./Header.css";

const headerLibrary = (props) => (
    <div className={classes.recentia_header}>
        <h1>Recentia Clinical Library</h1>
        <nav className={classes.header_nav}>
            <HeaderNavLibrary />
        </nav>
    </div>
);

export default headerLibrary;