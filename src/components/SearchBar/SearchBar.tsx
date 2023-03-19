import React, { Component } from 'react';
import stules from './SearchBar.module.scss';

class SearchBar extends Component {
  state = {
    searchTerm: localStorage.getItem('searchTermInput12347') || '',
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(this.state.searchTerm);
    localStorage.setItem('searchTermInput12347', this.state.searchTerm);
  };

  render() {
    return (
      <div className={stules.searchPanelContainer}>
        <form className={stules.searchForm} onSubmit={this.handleSubmit}>
          <input
            type="text"
            className={stules.searchInput}
            placeholder="Search..."
            value={this.state.searchTerm}
            onChange={this.handleInputChange}
          />
          <button type="submit" className={stules.searchButton}>
            <i className={`${stules.fas} ${stules.faSearch}`}>Search</i>
          </button>
        </form>
      </div>
    );
  }
}
export default SearchBar;
