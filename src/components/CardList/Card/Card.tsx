import { Product } from '../../../data/data';
import React, { Component, ReactNode } from 'react';
import CardStyle from './Card.module.scss';

class Card extends Component<Product> {
  render(): ReactNode {
    return (
      <div className={CardStyle.productCard}>
        <div className={CardStyle.productImage}>
          <img src={this.props.thumbnail} alt={this.props.title} />
        </div>
        <div className={CardStyle.productDetails}>
          <h3>{this.props.brand}</h3>
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
          <div className={CardStyle.productInfo}>
            <div className={CardStyle.rating}>rating: {this.props.rating}</div>
            <div className={CardStyle.stock}>stock: {this.props.stock}</div>
          </div>
          <p className={CardStyle.price}>price: {this.props.price}$</p>
          <button>Add to cart</button>
        </div>
      </div>
    );
  }
}

export default Card;
