import React, { Component } from 'react';
import styles from './SearchBar.module.scss';

class SearchBar extends Component {
  state = {
    searchTerm: localStorage.getItem('searchTermInput12347') || '',
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchTerm: e.target.value });
  };

  componentWillUnmount(): void {
    localStorage.setItem('searchTermInput12347', this.state.searchTerm);
  }

  handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  render() {
    return (
      <div className={styles.searchPanelContainer}>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
            value={this.state.searchTerm}
            onChange={this.handleInputChange}
          />
          <button type="submit" className={styles.searchButton}>
            <i className={`${styles.fas} ${styles.faSearch}`}>Search</i>
          </button>
        </form>
      </div>
    );
  }
}
export default SearchBar;
