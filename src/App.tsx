import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import styles from './App.module.css';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import BoxCraeted from './components/header/BoxCraeted';
import BoxLogIn from './components/header/BoxLogIn';
import BoxNav from './components/header/BoxNav';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/logIn">
          <BoxLogIn />
        </Route>
        <Route path="/invSektion">
          <div className={styles.nav}>
            <BoxNav />
            <BoxCraeted />
          </div>
        </Route>
        <Route exact path="/">
          <div className={styles.App}>
            <Header />
            <Content />
            <Footer />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
