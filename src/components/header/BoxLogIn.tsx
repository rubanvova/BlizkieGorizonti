import React from 'react';

import images from '../../images';

import styles from './BoxLogIn.module.css';

const BoxLogIn: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={images.logo} alt="" />
        </div>
        <div className={styles.users}>
          <div className={styles.user}>
            <div className={styles.userText}> Инвестору</div>
          </div>
          <div className={styles.user}>
            <div className={styles.userText}> Гос услуги</div>
          </div>
        </div>
        <div className={styles.inputs}>
          <input className={styles.input} placeholder="EMAIL" />
          <input className={styles.input} placeholder="PASSWORD" />
        </div>
        <div className={styles.boxButton}>
          <button className={styles.button}> Войти</button>
        </div>
      </div>
    </div>
  );
};

export default BoxLogIn;
