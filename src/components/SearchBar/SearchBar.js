import React, {Component} from 'react';
import classes from "./SearchBar.css";
import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';

import {
    // updateText,
    // handleInputChange,
    // getInfo
} from '../../containers/RecentiaClinicalLibrary/Metathesaurus/Metathesaurus';

class SearchBar extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className={classes.recentia_search_wrapper}>
                <form>
                    <input
                        type="text"
                        placeholder="Search"
                        // // onChange={(e) => updateText(e.target.value)}
                        // onChange={(e) => handleInputChange(e.target.value)}
                        // // onChange={handleInputChange}
                        onChange={(e) => this.props.onSearchChange(e.target.value)}
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
        // sample dispatch that sends query to state
        onSearchChange: (search) => dispatch(actions.getSearchTerm(search))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);