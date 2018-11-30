import React from 'react';

import LibraryNavigationItem from './LibraryNavigationItem/LibraryNavigationItem';

import classes from './LibraryNavigationItems.css';

const libaryNavigationItems = () => (
  <ul className={classes.recentia_search_ul}>
      <LibraryNavigationItem link='/dictionary'>Dictionary</LibraryNavigationItem>
      <LibraryNavigationItem link='/metathesaurus'>Metathesaurus</LibraryNavigationItem>
      <LibraryNavigationItem link='/coding_systems'>Coding Systems</LibraryNavigationItem>
      <LibraryNavigationItem link='/value_sets'>Value Sets</LibraryNavigationItem>
      <LibraryNavigationItem link='/languages'>Languages</LibraryNavigationItem>
  </ul>
);

export default libaryNavigationItems;