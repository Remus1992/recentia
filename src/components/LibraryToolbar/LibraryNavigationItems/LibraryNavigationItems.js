import React from 'react';

import LibraryNavigationItem from './LibraryNavigationItem/LibraryNavigationItem';

import classes from './LibraryNavigationItems.css';

const libraryNavigationItems = () => (
    <ul className={classes.recentia_search_ul}>
        <LibraryNavigationItem link='/clinical_library/metathesaurus'>Metathesaurus</LibraryNavigationItem>
        <LibraryNavigationItem link='/clinical_library/quality_measures'>Quality Measures</LibraryNavigationItem>
        <LibraryNavigationItem link='/clinical_library/code_groups'>Code Groups</LibraryNavigationItem>
        <LibraryNavigationItem link='/clinical_library/coding_systems'>Coding Systems</LibraryNavigationItem>
        <LibraryNavigationItem link='/clinical_library/clinical_dictionary'>Clinical Dictionary</LibraryNavigationItem>
        <LibraryNavigationItem link='/clinical_library/translate'>Translate</LibraryNavigationItem>
    </ul>
);

export default libraryNavigationItems;