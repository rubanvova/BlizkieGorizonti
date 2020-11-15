import React from 'react';
import images from '../../images';

import styles from './BacrgroundLeaf.module.css';

const BacrgroundLeaf = () => {
  return (
    <div className={styles.leaf}>
      <img src={images.leaf} alt="" />
    </div>
  );
};

export default BacrgroundLeaf;
