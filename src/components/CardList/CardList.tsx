import Card from '../Card/Card';
import { Product, products } from '../../data/data';
import React, { Component, ReactNode } from 'react';
import cardListStyles from './CardList.module.scss';

class CardList extends Component {
  state = {
    productsList: products,
  };

  render(): ReactNode {
    return (
      <div className={cardListStyles.cardListWraper}>
        {this.state.productsList.map((product: Product) => {
          return <Card key={product.id} {...product} />;
        })}
      </div>
    );
  }
}
export default CardList;
