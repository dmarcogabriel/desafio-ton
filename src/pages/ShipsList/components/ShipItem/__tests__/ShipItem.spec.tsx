import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {ShipItem} from '../ShipItem';
import {Ship} from 'src/types';

let mockShip: Ship | null = null;
const mockAddToCart = jest.fn((ship: Ship) => {
  mockShip = ship;
});
let mockShipId: string | null = null;
const mockRemoveFromCart = jest.fn((id: string) => {
  mockShipId = id;
});
const mockShipItem: Ship = {
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

beforeEach(() => {
  mockShip = null;
  mockShipId = null;
});

describe('pages/ShipList/ShipItem', () => {
  it('should pass on press add to cart button', () => {
    const {getByTestId} = render(
      <ShipItem
        onRemoveFromCart={mockRemoveFromCart}
        onAddToCart={mockAddToCart}
        ship={mockShipItem}
      />,
    );

    fireEvent.press(getByTestId('shipItemButton_1'));

    expect(getByTestId('shipItemButtonText_1').children[0]).toBe('Add To Cart');
    expect(mockAddToCart).toHaveBeenCalled();
    if (mockShip) {
      expect(mockShip.id).toBe('1');
    }
  });

  it('should pass on render ship item', () => {
    const {getByTestId} = render(
      <ShipItem
        onRemoveFromCart={mockRemoveFromCart}
        onAddToCart={mockAddToCart}
        ship={mockShipItem}
      />,
    );

    const shipItemName1 = getByTestId('shipItemName_1');
    const shipItemImage1 = getByTestId('shipItemImage_1');

    expect(shipItemName1.children[0]).toBe('CR90 corvette');
    expect(shipItemImage1).toHaveProp('resizeMode', 'cover');
  });

  it('should pass on render ship item added to cart', () => {
    const {getByTestId} = render(
      <ShipItem
        onAddToCart={mockAddToCart}
        onRemoveFromCart={mockRemoveFromCart}
        ship={mockShipItem}
        isAddedToCart
      />,
    );

    const shipItemName1 = getByTestId('shipItemName_1');
    const shipItemImage1 = getByTestId('shipItemImage_1');

    expect(getByTestId('shipItemButtonText_1').children[0]).toBe(
      'Remove From Cart',
    );
    expect(shipItemName1.children[0]).toBe('CR90 corvette');
    expect(shipItemImage1).toHaveProp('resizeMode', 'cover');
  });

  it('should pass on press remove from cart button', () => {
    const {getByTestId} = render(
      <ShipItem
        onAddToCart={mockAddToCart}
        onRemoveFromCart={mockRemoveFromCart}
        ship={mockShipItem}
        isAddedToCart
      />,
    );

    fireEvent.press(getByTestId('shipItemButton_1'));

    expect(mockRemoveFromCart).toHaveBeenCalled();
    expect(mockShipId).toBe('1');
  });
});
