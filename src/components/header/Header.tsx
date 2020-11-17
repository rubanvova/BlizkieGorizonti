import React from 'react';

import images from '../../images';
import Text from '../Text';
import BoxNav from './BoxNav';

import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.nav}>
          <BoxNav />
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.box}>
          <img src={images.photo} alt="" className={styles.photo} />
        </div>
        <div className={styles.text}>
          <Text bold classNames={styles.titleText}>
            Стань партнёром Близких Горизонтов
          </Text>
          <Text classNames={styles.bodytext}>
            Станьте партнером «Близких Горизонтов» и примите участие в развитии
            перспективной интернет-площадки, на которой встречаются инноваторы и
            инвесторы. Мы открыты к любому сотрудничеству, если вам близка наша
            цель и наши идеи.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Header;
