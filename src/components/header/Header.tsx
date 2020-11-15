import React from 'react';

import images from '../../images';
import Text from '../Text';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.nav}>
          <img src={images.logo} alt="" height="56px" width="196px" />
          <div className={styles.panel}>
            <Text classNames={styles.href}>Инвестиционная секция</Text>
            <Text classNames={styles.href}>Торговая секция</Text>
            <Text classNames={styles.href}>Сервисы</Text>
            <Text classNames={styles.href}>Блоги</Text>
            <Text classNames={styles.href}>О платформе</Text>
          </div>
          <div className={styles.loginbox}>
            <img src={images.login} alt="" height="18px" width="18px" />
            <div className={styles.login}>Войти</div>
          </div>
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
