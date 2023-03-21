import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { products } from '../../data/data';

import Card from './Card';



describe('Card tests', () => {
    
    it('Card have title', () => {
     const {getByText} =  render(<Card {...products[0]}/>);
      const buttonElement = getByText(/Add to cart/i);
      expect(buttonElement).toBeInTheDocument();
    });
   
  });