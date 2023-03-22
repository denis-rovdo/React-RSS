import CardList from '../CardList/CardList';
import React, { Component, ReactNode } from 'react';
import SearchBar from '../SearchBar/SearchBar';

class HomePage extends Component {
  render(): ReactNode {
    return (
      <div>
        <SearchBar />
        <CardList />
      </div>
    );
  }
}
export default HomePage;
