import React from 'react';
import Aux from '../../HOC/Auxilary';
import classes from './Layout.css'

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDraw, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;