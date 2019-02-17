// import React from 'react';
//
// import LibraryNavigationItem from './LibraryNavigationItem/LibraryNavigationItem';
//
// import classes from './LibraryNavigationItems.css';
//
// const libraryNavigationItems = () => (
//     <ul className={classes.recentia_search_ul}>
//         <LibraryNavigationItem link='/clinical_library/metathesaurus'>Metathesaurus</LibraryNavigationItem>
//         <LibraryNavigationItem link='/clinical_library/quality_measures'>Quality Measures</LibraryNavigationItem>
//         <LibraryNavigationItem link='/clinical_library/code_groups'>Code Groups</LibraryNavigationItem>
//         <LibraryNavigationItem link='/clinical_library/coding_systems'>Coding Systems</LibraryNavigationItem>
//         <LibraryNavigationItem link='/clinical_library/clinical_dictionary'>Clinical Dictionary</LibraryNavigationItem>
//         <LibraryNavigationItem link='/clinical_library/translate'>Translate</LibraryNavigationItem>
//     </ul>
// );
//
// export default libraryNavigationItems;


import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {NavLink} from "react-router-dom";

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
// import lightBlue from '@material-ui/core/colors/lightBlue';

const theme = createMuiTheme({
    // palette: {
    //     primary: lightBlue,
    // },
});


const styles = {
    root: {
        flexGrow: 1,
    },
};

class libraryNavigationItems extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <div className={classes.root}>
                <MuiThemeProvider theme={theme}>
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={this.handleChange}
                            centered
                        >
                            <Tab label="Metathesaurus" component={NavLink} to='/clinical_library/metathesaurus'/>
                            <Tab label="Quality Measures" component={NavLink} to='/clinical_library/quality_measures'/>
                            <Tab label="Code Groups" component={NavLink} to='/clinical_library/code_groups'/>
                            <Tab label="Coding Systems" component={NavLink} to='/clinical_library/coding_systems'/>
                            <Tab label="Clinical Dictionary" component={NavLink}
                                 to='/clinical_library/clinical_dictionary'/>
                            {/*<Tab label="Translate" component={NavLink} to='/clinical_library/translate'/>*/}
                        </Tabs>
                    </AppBar>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default withStyles(styles)(libraryNavigationItems);