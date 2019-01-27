import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import classes from './LibraryNavigationItem.css';

import * as actions from "../../../../store/actions";
import {connect} from "react-redux";

const libraryNavigationItem = (props) => (
    <li className={classes.recentia_search_li}>
        <NavLink
            to={props.link}
            exact
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
);
export default libraryNavigationItem;

// class LibraryNavigationItem extends Component {
//     constructor(props) {
//         super(props);
//
//         this.handleClicker = this.handleClicker.bind(this);
//     }
//
//     handleClicker(event) {
//         this.props.onSubmitSearchStart();
//         // event.preventDefault();
//     }
//
//     render() {
//         return (
//             <li className={classes.recentia_search_li}>
//                 <NavLink
//                     to={this.props.link}
//                     exact
//                     activeClassName={classes.active}
//                     onClick={this.handleClicker}
//                 >{this.props.children}</NavLink>
//             </li>
//         )
//
//     }
// }
//
// const mapDispatchToProps = dispatch => {
//     return {
//         onSubmitSearchStart: () => dispatch(actions.submitSearchStart())
//     }
// };
//
// export default connect(null, mapDispatchToProps)(LibraryNavigationItem);