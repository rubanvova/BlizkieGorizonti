import React from 'react';
import BoxAdvantages from './BoxAdvantages';
import BoxPartnership from './BoxPartnership';

import styles from './Content.module.css';

const Content = () => {
  return (
    <div className={styles.contentWrapper}>
      <BoxAdvantages />
      <BoxPartnership />
    </div>
  );
};

export default Content;
