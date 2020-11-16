import React from 'react';

import Text from '../Text';

import styles from './BoxForm.module.css';

type inputProps = {
  title: string;
  place: string;
};

const Input: React.FC<inputProps> = ({ title, place }) => {
  return (
    <div>
      <Text classNames={styles.title}>{title}</Text>
      <input className={styles.input} placeholder={place} />
    </div>
  );
};

const BoxForm: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.boxChapter}>
          <Text bold classNames={styles.chapter}>
            Присоединяйся к сообществу
          </Text>
          <Text classNames={styles.chapterText}>
            Вливайся в перспективную команду инноваторов, инвесторов и
            партнеров, будь вместе с теми, кто открывает и приближает горизонты,
            кто развивает интересный бизнес.
          </Text>
        </div>
        <div className={styles.inputs}>
          <div className={styles.rowOne}>
            <Input title="ФИО" place="Петров Иван Сергеевич" />
            <Input title="Контактный телефон" place="+7 987 654 32 10" />
          </div>
          <div className={styles.rowTwo}>
            <Input title="Электронная почта" place="example@mail.com" />
            <Input title="Сайт компании" place="companyadress.com" />
          </div>
        </div>
        <div className={styles.boxButton}>
          <button className={styles.button}>Стать партнёром</button>
        </div>
      </div>
    </div>
  );
};

export default BoxForm;
