import React from 'react';

import images from '../../images';
import Box from './Box';

import styles from './Footer.module.css';

const data = [
  {
    title: 'Инвестирование',
    textOne: 'Инвестиционные предложения',
    textTwo: 'Инвесторам',
    textThree: 'Налоговые послабления',
  },
  {
    title: 'Привлечение инвестиций',
    textOne: 'Успешные истории',
    textTwo: 'Центр знаний',
    textThree: 'Секторное внимание',
  },
  {
    title: 'О нас',
    textOne: 'Партнёрство',
    textTwo: 'Блог',
    textThree: 'Помощь',
  },
  {
    title: 'Документы',
    textOne: 'Правила платформы',
    textTwo: 'Политика конфиденциальности',
    textThree: '',
  },
];

const Footer: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.boxs}>
        {data.map((i, index) => (
          <Box
            key={index}
            title={i.title}
            textOne={i.textOne}
            textTwo={i.textTwo}
            textThree={i.textThree}
          />
        ))}
      </div>
      <div className={styles.img}>
        <img src={images.logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
