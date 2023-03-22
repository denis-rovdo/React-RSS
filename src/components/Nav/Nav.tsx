import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

const pages = [
  {
    path: '/',
    text: 'Home page',
  },
  {
    path: '/about',
    text: 'About Us',
  },
];

class Nav extends Component {
  render(): ReactNode {
    return (
      <nav className={styles.navigationBarContainer}>
        <ul className={styles.navigationBarList}>
          {pages.map((page, index) => {
            return (
              <li className={styles.navigationBarItem} key={index}>
                <NavLink
                  to={page.path}
                  className={({ isActive }) => {
                    return isActive ? `${styles.navigationBarItemActive}` : '';
                  }}
                >
                  {page.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Nav;
