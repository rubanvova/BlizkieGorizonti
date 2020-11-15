import React from 'react';
import styles from './App.module.css';
import Content from './components/content/Content';
import Header from './components/header/Header';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Content />
    </div>
  );
};

export default App;
