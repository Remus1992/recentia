import React, {Component} from 'react';

import axios from '../axios-orders';

import Profile from '../components/Profile/Profile';

import classes from './Home.css'
import {NavLink} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Profile/>
                <div className={classes.recentia_header}>
                    <h1>Recentia Clinical Library</h1>
                    <nav className={classes.header_nav}>
                        <ul className={classes.header_ul}>
                            <li className={classes.header_li}>
                                <NavLink to="/clinical_library">Home</NavLink>
                            </li>
                            <li className={classes.header_li}>
                                <p style={{"color": "white", "margin": "0"}}>|</p>
                            </li>
                            <li className={classes.header_li}>
                                <NavLink to="/clinical_visit_support">Clinical Visit Support</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={classes.recentia_search}>
                    <div className={classes.recentia_search_wrapper}>
                        <input type="text" placeholder="Search" className={classes.search_bar}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;