import React from 'react';

import images from '../../images';
import Text from '../Text';

import styles from './BoxOurPartners.module.css';

const BoxOurPartners = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.boxText}>
        <Text bold classNames={styles.title}>
          Наши партнёры
        </Text>
        <Text classNames={styles.text}>
          Сотрудничая с нами, направляя других предпринимателей в «Близкие
          Горизонты», вы участвуете в решении важных задач, с которой
          сталкивается каждый стартующий бизнес. Это привлечение инвестиций на
          развитие и внедрение инновационных идей, достижение интеллектуальных и
          финансовых успехов.
        </Text>
      </div>
      <div className={styles.images}>
        <div className={styles.imageOne}>
          <img src={images.image1} alt="" />
          <img src={images.image2} alt="" />
        </div>
        <div className={styles.imageTwo}>
          <img src={images.image2} alt="" />
          <img src={images.image1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BoxOurPartners;
