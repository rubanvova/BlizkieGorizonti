import React from 'react';

import Text from '../Text';

import styles from './BoxCraeted.module.css';

const BoxCraeted = () => {
  return (
    <div className={styles.text}>
      <Text bold classNames={styles.text}>
        Данная страница находится в разработке. Следите за обновлениями.
      </Text>
    </div>
  );
};

export default BoxCraeted;
