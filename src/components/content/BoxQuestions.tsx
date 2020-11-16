import React, { useState } from 'react';

import Text from '../Text';
import images from '../../images';
import { textOne } from './constants';

import styles from './BoxQuestions.module.css';

const data = [
  {
    title: 'Как я могу инвестировать?',
    text: textOne,
  },
  {
    title: 'Кто может инвестировать?',
    text: textOne,
  },
  {
    title: 'Как я могу вернуть вложенные средства?',
    text: textOne,
  },
];

type boxProps = {
  title: string;
  text: string;
};

const Box: React.FC<boxProps> = ({ title, text }) => {
  const [show, setShow] = useState<boolean>(false);
  const hanlerOnClik = () => {
    setShow(!show);
  };
  return (
    <div className={styles.container}>
      <div className={styles.title} onClick={hanlerOnClik}>
        <Text bold classNames={styles.containerTitle}>
          {title}
        </Text>
        {show ? (
          <img src={images.close} className={styles.button} alt="" />
        ) : (
          <img src={images.arrow} className={styles.button} alt="" />
        )}
      </div>
      {show && (
        <div className={styles.bodyText}>
          <Text classNames={styles.text}>{text}</Text>
        </div>
      )}
    </div>
  );
};

const BoxQuestions: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Text classNames={styles.titleText} bold>
        Часто задаваемые вопросы
      </Text>
      {data.map((i, index) => (
        <Box key={index} text={i.text} title={i.title} />
      ))}
    </div>
  );
};

export default BoxQuestions;
