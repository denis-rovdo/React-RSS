import React, { Component } from 'react';
import stules from './NotFound.module.scss';

class NotFound extends Component {
  render(): React.ReactNode {
    return (
      <div className={stules.notFoundContainer}>
        <h1 className={stules.notFoundHeader}>404</h1>
        <p className={stules.notFoundText}>Oops! The page you requested could not be found.</p>
      </div>
    );
  }
}
export default NotFound;
