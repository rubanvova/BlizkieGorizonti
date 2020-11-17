import React from 'react';

import BacrgroundLeaf from './BacrgroundLeaf';
import Text from '../Text';
import images from '../../images';

import styles from './BoxAdvantages.module.css';

const data = [
  {
    img: images.icon1,
    title: 'Сотрудничество',
    text:
      ' Мы готовы вместе с вами решать интересные задачи, воплощать самые неожиданные идеи и настроены на долговременные отношения.',
  },
  {
    img: images.icon2,
    title: 'Инициативы',
    text:
      'Предлагаем вам разработать общий план действий, объединить ресурсы, определить пути достижения общей взаимовыгодной цели.',
  },
  {
    img: images.icon3,
    title: 'Конкуренция ',
    text:
      'Партнерство – это совместная конкурентная стратегия и тактика, определенные внутренние и внешние договоренности, общий успех',
  },
  {
    img: images.icon4,
    title: 'Стабильность',
    text:
      'Совместная деятельность – это шанс сделать свой бизнес стабильным и постоянно развивающимся, перспективным и выгодным',
  },
];

type boxProps = {
  img: string;
  title: string;
  text: string;
};

const Box: React.FC<boxProps> = ({ img, title, text }) => {
  return (
    <div className={styles.box}>
      <img src={img} alt="" height="60px" width="60px" />
      <Text bold classNames={styles.titleText}>
        {title}
      </Text>
      <Text classNames={styles.bodyText}>{text}</Text>
    </div>
  );
};

const BoxAdvantages: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leaf}>
        <BacrgroundLeaf />
      </div>
      {data.map((i, index) => (
        <Box key={index} img={i.img} text={i.text} title={i.title} />
      ))}
    </div>
  );
};

export default BoxAdvantages;
