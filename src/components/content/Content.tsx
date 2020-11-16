import React from 'react';

import BoxAdvantages from './BoxAdvantages';
import BoxOurPartners from './BoxOurPartners';
import BoxPartnership from './BoxPartnership';
import BoxReviews from './BoxReviews';
import BoxQuestions from './BoxQuestions';

import styles from './Content.module.css';

const Content = () => {
  return (
    <div className={styles.contentWrapper}>
      <BoxAdvantages />
      <BoxPartnership />
      <BoxOurPartners />
      <BoxReviews />
      <BoxQuestions />
    </div>
  );
};

export default Content;
