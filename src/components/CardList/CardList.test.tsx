import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { products } from '../../data/data';

import CardList from './CardList';

describe('CardList tests', () => {
  it('Card have title', () => {
    render(<CardList />);
    expect(screen.getByText(products[0].title)).toBeInTheDocument();
  });
});
