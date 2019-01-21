import React, {Component} from 'react';
import classes from "./SearchBar.css";
import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';

class SearchBar extends Component {

    render() {
        return (
            <div className={classes.recentia_search_wrapper}>
                <form>
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => this.props.onGetInfo(e.target.value)}
                        className={classes.search_bar}/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchTerm: state.searchReducer.search_term
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (search) => dispatch(actions.getSearchTerm(search)),
        onGetInfo: (SEARCH) => dispatch(actions.getInfo(SEARCH))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);