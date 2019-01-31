import React from 'react';

// import classes from './Synonym.css';

const synonymItem = (props) => (
    <li key={props.children}>
        {props.children}
    </li>
);
export default synonymItem;
