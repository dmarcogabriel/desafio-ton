import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {CartItem} from '../CartItem';
import {Ship} from '../../../../../types';

const mockProduct: Ship = {
  id: '1',
  name: 'CR90 corvette',
  model: 'CR90 corvette',
  manufacturer: 'Corellian Engineering Corporation',
  cost_in_credits: '3500000',
  length: '150',
  max_atmosphering_speed: '950',
  crew: '30-165',
  passengers: '600',
  cargo_capacity: '3000000',
  consumables: '1 year',
  hyperdrive_rating: '2.0',
  MGLT: '60',
  starship_class: 'corvette',
  pilots: [],
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/6/',
  ],
  created: '2014-12-10T14:20:33.369000Z',
  edited: '2014-12-20T21:23:49.867000Z',
  url: 'https://swapi.dev/api/starships/2/',
};

let mockId: string;
const mockRemoveItem = jest.fn((id: string) => {
  mockId = id;
});

describe('pages/Cart/components/CartItem', () => {
  it('should pass on render cart item', () => {
    const {getByTestId} = render(
      <CartItem onRemoveItem={mockRemoveItem} product={mockProduct} />,
    );

    expect(getByTestId('cartItem_1')).toBeDefined();
    expect(getByTestId('cartItemName_1').children[0]).toBe('CR90 corvette');
    expect(getByTestId('cartItemPrice_1').children[0]).toBe('Price: 3500000');
  });

  it('should pass on remove cart item', () => {
    const {getByTestId} = render(
      <CartItem product={mockProduct} onRemoveItem={mockRemoveItem} />,
    );

    fireEvent.press(getByTestId('cartItemRemoveButton_1'));

    expect(getByTestId('cartItemName_1').children[0]).toBe('CR90 corvette');
    expect(mockRemoveItem).toHaveBeenCalled();
    expect(mockId).toBe('1');
  });
});
