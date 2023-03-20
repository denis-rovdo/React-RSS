import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import stule from './Nav.module.scss';


class Nav extends Component {

    render(): ReactNode {
        return (
            <div className={stule.navigationBarContainer}>
                <ul className={stule.navigationBarList}>
                    <li
                        className={`${stule.navigationBarItem}`}
                    >
                        <Link to="/">Home page</Link>
                    </li>
                    <li
                        className={`${stule.navigationBarItem} `}
                    >
                        <Link to="/about">About Us</Link>
                    </li>
                    
                </ul>
            </div>
        )
    }
}

export default Nav