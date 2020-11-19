import React, { useState } from 'react';

import Text from '../Text';

import styles from './BoxForm.module.css';

type inputProps = {
  title: string;
  name: string;
  place: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
};

const Input: React.FC<inputProps> = ({ title, name, place, onChange }) => {
  return (
    <div>
      <Text classNames={styles.title}>{title}</Text>
      <input
        name={name}
        onChange={onChange}
        className={styles.input}
        placeholder={place}
      />
    </div>
  );
};

const BoxForm: React.FC = () => {
  type types = {
    name: string;
    tel: string;
    email: string;
    web: string;
  };
  const [showModal, setshowModal] = useState<boolean>(false);

  const [dataInputs, setDataInputs] = useState<types>({
    name: '',
    tel: '',
    email: '',
    web: '',
  });

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (showModal) {
      e.target.value = '';
      console.log('123');
    }
    setDataInputs({ ...dataInputs, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setshowModal((modal) => !modal);
    setDataInputs({ name: '', tel: '', email: '', web: '' });
  };

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
            <Input
              name="name"
              onChange={handlerChange}
              title="ФИО"
              place="Петров Иван Сергеевич"
            />
            <Input
              name="tel"
              onChange={handlerChange}
              title="Контактный телефон"
              place="+7 987 654 32 10"
            />
          </div>
          <div className={styles.rowTwo}>
            <Input
              name="email"
              onChange={handlerChange}
              title="Электронная почта"
              place="example@mail.com"
            />
            <Input
              name="web"
              onChange={handlerChange}
              title="Сайт компании"
              place="companyadress.com"
            />
          </div>
          {showModal && (
            <div className={styles.wrapperModal}>
              <div className={styles.modal}>
                <div className={styles.textModal}>
                  <Text>ФИО:{dataInputs.name} </Text>
                  <Text>Контактный телефон:{dataInputs.tel} </Text>
                  <Text>Электронная почта:{dataInputs.email} </Text>
                  <Text>Сайт компании:{dataInputs.web} </Text>
                  <button className={styles.buttonOk} onClick={closeModal}>
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.boxButton}>
          <button
            className={styles.button}
            onClick={() => setshowModal(!showModal)}
          >
            Стать партнёром
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoxForm;
