import React from 'react';

import LibraryNavigationItem from './LibraryNavigationItem/LibraryNavigationItem';

import classes from './LibraryNavigationItems.css';

const libaryNavigationItems = () => (
  <ul className={classes.recentia_search_ul}>
      <LibraryNavigationItem link='/clinical_library/dictionary'>Dictionary</LibraryNavigationItem>
      <LibraryNavigationItem link='/clinical_library/metathesaurus'>Metathesaurus</LibraryNavigationItem>
      <LibraryNavigationItem link='/clinical_library/coding_systems'>Coding Systems</LibraryNavigationItem>
      <LibraryNavigationItem link='/clinical_library/value_sets'>Value Sets</LibraryNavigationItem>
      <LibraryNavigationItem link='/clinical_library/languages'>Languages</LibraryNavigationItem>
  </ul>
);

export default libaryNavigationItems;