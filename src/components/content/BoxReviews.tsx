import React, { useState, useEffect } from 'react';

import Text from '../Text';
import BacrgroundLeaf from './BacrgroundLeaf';

import styles from './BoxReviews.module.css';

const data = [
  {
    id: 0,
    name: 'Елена Иванова',
    desc: 'Сооснователь Contruct Industries',
    text:
      'Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности требуют от нас анализа существенных финансовых.',
  },
  {
    id: 1,
    name: 'Елена Иванова',
    desc: 'Сооснователь Contruct Industries',
    text:
      'Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же постоянный количественный.',
  },
  {
    id: 2,
    name: 'Елена Иванова',
    desc: 'Сооснователь Contruct Industries',
    text:
      'Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности требуют от нас анализа существенных финансовых и административных условий.',
  },
  {
    id: 3,
    name: 'Елена Иванова',
    desc: 'Сооснователь Contruct Industries',
    text:
      'Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании.',
  },
  {
    id: 4,
    name: 'Елена Иванова',
    desc: 'Сооснователь Contruct Industries',
    text:
      'Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности требуют от нас анализа существенных.',
  },
];

type reviwsProps = {
  name: string;
  desc: string;
  active?: number;
  id: number;
  handler: (id: number) => any;
};

const Reviews: React.FC<reviwsProps> = ({
  name,
  desc,
  id,
  active,
  handler,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (active === id) {
      setShow(!show);
    } else if (active !== id) {
      setShow(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const circleSizeActive = show ? '57px' : '';

  return (
    <>
      <div className={styles.review}>
        <div
          className={styles.cicrle}
          style={{ width: circleSizeActive, height: circleSizeActive }}
          onClick={() => handler(id)}
        ></div>
        {show && (
          <div className={styles.reviwtext}>
            <Text classNames={styles.name}>{name}</Text>
            <Text classNames={styles.desc}>{desc}</Text>
          </div>
        )}
      </div>
    </>
  );
};

const BoxReviews = () => {
  const [active, setActive] = useState<number>(2);

  const handler = (id: number) => {
    setActive(id);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.leaf}>
        <BacrgroundLeaf />
      </div>
      <div className={styles.titleTexts}>
        <Text bold classNames={styles.title}>
          Наши верные друзья
        </Text>
        <Text> Что говорят о нас</Text>
      </div>
      <div className={styles.wrapperReviews}>
        <div className={styles.container}>
          {data.map((i, index) =>
            i.id === active ? (
              <Text classNames={styles.textReview} key={index}>
                {i.text}
              </Text>
            ) : (
              ''
            )
          )}
        </div>
        <div className={styles.reviews}>
          {data.map((i, index) => (
            <Reviews
              handler={handler}
              active={active}
              id={i.id}
              key={index}
              name={i.name}
              desc={i.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxReviews;
