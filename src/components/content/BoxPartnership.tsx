import React from 'react';

import Text from '../Text';
import images from '../../images';

import styles from './BoxPartnership.module.css';

const Box = () => {
  return (
    <div className={styles.box}>
      <img src={images.photo1} alt="" />
      <div className={styles.body}>
        <Text bold> Коворкинг и акселераторы</Text>
        <Text classNames={styles.text}>
          Узнайте больше о том, как наши партнеры по совместной работе и
          ускорению в Великобритании помогают революционным предпринимателям
          привлекать финансовые средства посредством краудфандинга.
        </Text>
      </div>
    </div>
  );
};

const BoxPartnership = () => {
  return (
    <div className={styles.wrapper}>
      <Text bold classNames={styles.chapter}>
        Какое это партнёрство
      </Text>
      <div className={styles.boxs}>
        <Box />
        <Box />
      </div>
    </div>
  );
};

export default BoxPartnership;
