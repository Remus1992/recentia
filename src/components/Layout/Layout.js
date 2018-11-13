import React from 'react';
import Aux from '../../HOC/Auxilary';

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDraw, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;