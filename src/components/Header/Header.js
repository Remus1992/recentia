import React from "react";

import HeaderNavItems from './HeaderNavItems/HeaderNavItems';

import classes from "./Header.css";

const header = (props) => (
    <div className={classes.recentia_header}>
        <h1>{props.header_title}</h1>
        <nav className={classes.header_nav}>
            <HeaderNavItems
                title1={props.link1_title}
                l1={props.link1}
                title2={props.link2_title}
                l2={props.link2}
            />
        </nav>
    </div>
);

export default header;