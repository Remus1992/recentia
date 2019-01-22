import React, {Component} from 'react';
import classes from "./SearchBar.css";
import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        // alert('A term was submitted: ' + this.props.searchTerm);
        console.log(this.props.searchTerm);
        // this.props.onGetInfo(this.props.searchTerm);
        this.props.onSubmitSearchStart();
        event.preventDefault();
    }

    render() {
        return (
            <div className={classes.recentia_search_wrapper}>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search"
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
        onSearchChange: (search) => dispatch(actions.getSearchTerm(search)),
        onGetInfo: (SEARCH) => dispatch(actions.getInfo(SEARCH)),
        onSubmitSearchStart: () => dispatch(actions.submitSearchStart())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);