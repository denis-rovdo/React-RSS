import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { products } from '../../../data/data';

import Card from './Card';

describe('Card tests', () => {
  it('Card have title', () => {
    const { getByText } = render(<Card {...products[0]} />);
    const titleText = getByText(products[0].title);
    expect(titleText).toBeInTheDocument();
  });
  it('Card have prise', () => {
    const { getByText } = render(<Card {...products[0]} />);
    const priseText = getByText(/price:/i);
    expect(priseText).toBeInTheDocument();
  });
  it('Card have buttonText', () => {
    const { getByText } = render(<Card {...products[0]} />);
    const buttonText = getByText(/Add to cart/i);
    expect(buttonText).toBeInTheDocument();
  });
});
