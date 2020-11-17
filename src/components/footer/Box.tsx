import React from 'react';

import Text from '../Text';

import styles from './Box.module.css';

type boxProps = {
  title: string;
  textOne?: string;
  textTwo?: string;
  textThree?: string;
};

const Box: React.FC<boxProps> = ({ title, textOne, textTwo, textThree }) => {
  return (
    <div className={styles.wrapper}>
      <Text bold classNames={styles.title}>
        {title}
      </Text>
      <Text classNames={styles.text}>{textOne}</Text>
      <Text classNames={styles.text}>{textTwo}</Text>
      <Text classNames={styles.text}>{textThree}</Text>
    </div>
  );
};

export default Box;
