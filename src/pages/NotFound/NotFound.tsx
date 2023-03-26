import React, { Component, ReactNode } from 'react';
import styles from './NotFound.module.scss';

class NotFound extends Component {
  render(): ReactNode {
    return (
      <div className={styles.notFoundContainer}>
        <h1 className={styles.notFoundHeader}>404</h1>
        <p className={styles.notFoundText}>Oops! The page you requested could not be found.</p>
      </div>
    );
  }
}
export default NotFound;
