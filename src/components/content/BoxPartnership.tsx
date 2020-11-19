import React from 'react';

import Text from '../Text';
import images from '../../images';
import BacrgroundLeaf from './BacrgroundLeaf';

import styles from './BoxPartnership.module.css';

const data = [
  {
    img: images.photo1,
    title: 'Коворкинг и акселераторы',
    text:
      'Узнайте больше о том, как наши партнеры по совместной работе и ускорению в Великобритании помогают революционным предпринимателям привлекать финансовые средства посредством краудфандинга.',
  },
  {
    img: images.photo2,
    title: 'Корпоративные финансы',
    text:
      'Узнайте больше о том, как наши партнеры по совместной работе и ускорению в Великобритании помогают революционным предпринимателям привлекать финансовые средства посредством краудфандинга.',
  },
];

type boxProps = {
  img: string;
  text: string;
  title: string;
};

const Box: React.FC<boxProps> = ({ img, text, title }) => {
  return (
    <div className={styles.box}>
      <img src={img} alt="" className={styles.imgbox} />
      <div className={styles.body}>
        <Text bold>{title}</Text>
        <Text classNames={styles.text}>{text}</Text>
      </div>
    </div>
  );
};

const BoxPartnership: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Text bold classNames={styles.chapter}>
        Какое это партнёрство
      </Text>
      <div className={styles.boxs}>
        {data.map((i, index) => (
          <Box key={index} img={i.img} text={i.text} title={i.title} />
        ))}
      </div>
      <div className={styles.leaf}>
        <BacrgroundLeaf />
      </div>
    </div>
  );
};

export default BoxPartnership;
