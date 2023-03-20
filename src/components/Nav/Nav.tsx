import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import stule from './Nav.module.scss';

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
      <div className={stule.navigationBarContainer}>
        <ul className={stule.navigationBarList}>
          {pages.map((page, index) => {
            return (
              <li className={stule.navigationBarItem} key={index}>
                <NavLink
                  to={page.path}
                  className={({ isActive }) => {
                    return isActive ? `${stule.navigationBarItemActive}` : '';
                  }}
                >
                  {page.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Nav;
