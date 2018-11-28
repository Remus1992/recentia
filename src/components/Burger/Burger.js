import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // only have ingredients here (not 'match') because Burger isn't loaded through
    // routing. Only BurgerBuilder is
    console.log(props);
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    // console.log(transformedIngredients);
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Start Adding Ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

// this 'withRouter' will inject 'match' and other elements with Burger element
export default withRouter(burger);