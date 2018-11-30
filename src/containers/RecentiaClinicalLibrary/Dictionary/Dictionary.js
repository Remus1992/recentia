import React, {Component} from 'react';
import LibraryToolbar from '../../../components/LibraryToolbar/LibraryToolbar';

import axios from '../../../axios-orders';

import doctorAvatar from '../../../assests/images/LLH-Doctors-Male-Avatar-300x300.png';
import classes from './Dictionary.css'

class Dictionary extends Component {
    state = {
        definitions: null
    };

    render() {
        return (
            <React.Fragment>
                <div className={classes.profile}>
                    <img className={classes.profile_pic} src={doctorAvatar}/>
                    <p>Brian Martin, M.D.</p>
                </div>

                <div className={classes.recentia_header}>
                    <h1>Recentia Clinical Library</h1>
                    <nav className={classes.header_nav}>
                        <ul className={classes.header_ul}>
                            <li className={classes.header_li}>
                                <a href="/">Home</a>
                            </li>
                            <li className={classes.header_li}>
                                <p style={{"color": "white", "margin": "0"}}>|</p>
                            </li>
                            <li className={classes.header_li}>
                                <a href="/">Clinical Visit Support</a>
                            </li>

                        </ul>
                    </nav>
                </div>

                <div className={classes.recentia_search}>
                    <div className={classes.recentia_search_wrapper}>
                        <input type="text" placeholder="Search" className={classes.search_bar}/>
                    </div>
                    <LibraryToolbar/>
                </div>
            </React.Fragment>
        );
    }
}

export default Dictionary;