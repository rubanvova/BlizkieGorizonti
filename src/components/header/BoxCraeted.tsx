import React from 'react';

import Text from '../Text';

import styles from './BoxCraeted.module.css';

const BoxCraeted: React.FC = () => {
  return (
    <Text bold classNames={styles.text}>
      Данная страница находится в разработке. Следите за обновлениями.
    </Text>
  );
};

export default BoxCraeted;
