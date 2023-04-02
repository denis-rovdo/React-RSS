import CardList from '../../components/CardList/CardList';
import React, { Component, ReactNode } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

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
