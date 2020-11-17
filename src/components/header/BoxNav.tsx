import React from 'react';
import { NavLink } from 'react-router-dom';

import images from '../../images';
import Text from '../Text';

import styles from './BoxNav.module.css';

const BoxNav: React.FC = () => {
  return (
    <div className={styles.nav}>
      <NavLink to="/">
        <img src={images.logo} alt="" height="56px" width="196px" />
      </NavLink>
      <div className={styles.panel}>
        <NavLink to="/invSektion" style={{ textDecoration: 'none' }}>
          <Text classNames={styles.href}>Инвестиционная секция</Text>
        </NavLink>
        <NavLink to="/invSektion" style={{ textDecoration: 'none' }}>
          <Text classNames={styles.href}>Торговая секция</Text>
        </NavLink>
        <NavLink to="/invSektion" style={{ textDecoration: 'none' }}>
          <Text classNames={styles.href}>Сервисы</Text>
        </NavLink>
        <NavLink to="/invSektion" style={{ textDecoration: 'none' }}>
          <Text classNames={styles.href}>Блоги</Text>
        </NavLink>
        <NavLink to="/invSektion" style={{ textDecoration: 'none' }}>
          <Text classNames={styles.href}>О платформе</Text>
        </NavLink>
      </div>
      <NavLink to="/logIn" style={{ textDecoration: 'none' }}>
        <div className={styles.loginbox}>
          <img src={images.login} alt="" height="18px" width="18px" />
          <div className={styles.login}>Войти</div>
        </div>
      </NavLink>
    </div>
  );
};

export default BoxNav;
