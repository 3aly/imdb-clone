import React from 'react';

import styles from './searchbar.css';

export interface searchbarProps {
  prop?: string;
}

export function searchbar({prop = 'default value'}: searchbarProps) {
  return <div className={styles.searchbar}>searchbar {prop}</div>;
}
