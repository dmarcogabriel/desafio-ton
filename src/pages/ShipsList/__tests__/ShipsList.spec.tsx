import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {ShipsList} from '../ShipsList';
import {ApiResponse} from '../ApiResponse.interface';
import {Ship} from 'src/types';

jest.mock('../shipList.service', () => ({
  loadProducts: jest.fn(
    async (): Promise<ApiResponse> =>
      Promise.resolve({
        results: [
          {
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
          },
          {
            id: '2',
            name: 'Star Destroyer',
            model: 'Imperial I-class Star Destroyer',
            manufacturer: 'Kuat Drive Yards',
            cost_in_credits: '150000000',
            length: '1,600',
            max_atmosphering_speed: '975',
            crew: '47,060',
            passengers: 'n/a',
            cargo_capacity: '36000000',
            consumables: '2 years',
            hyperdrive_rating: '2.0',
            MGLT: '60',
            starship_class: 'Star Destroyer',
            pilots: [],
            films: [
              'https://swapi.dev/api/films/1/',
              'https://swapi.dev/api/films/2/',
              'https://swapi.dev/api/films/3/',
            ],
            created: '2014-12-10T15:08:19.848000Z',
            edited: '2014-12-20T21:23:49.870000Z',
            url: 'https://swapi.dev/api/starships/3/',
          },
        ],
        count: 0,
        next: '',
        previous: '',
      }),
  ),
}));

let mockAddedProduct: Ship;
const mockAddProduct = jest.fn((ship: Ship) => {
  mockAddedProduct = ship;
});
let mockRemovedProductId: string;
const mockRemoveProduct = jest.fn((id: string) => {
  mockRemovedProductId = id;
});
const mockProductList: Ship[] = [
  {
    id: '2',
    name: 'Star Destroyer',
    model: 'Imperial I-class Star Destroyer',
    manufacturer: 'Kuat Drive Yards',
    cost_in_credits: '150000000',
    length: '1,600',
    max_atmosphering_speed: '975',
    crew: '47,060',
    passengers: 'n/a',
    cargo_capacity: '36000000',
    consumables: '2 years',
    hyperdrive_rating: '2.0',
    MGLT: '60',
    starship_class: 'Star Destroyer',
    pilots: [],
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
    ],
    created: '2014-12-10T15:08:19.848000Z',
    edited: '2014-12-20T21:23:49.870000Z',
    url: 'https://swapi.dev/api/starships/3/',
  },
];

jest.mock('../../../hooks', () => ({
  useCart: () => ({
    addProduct: mockAddProduct,
    removeProductById: mockRemoveProduct,
    productList: mockProductList,
  }),
}));

describe('pages/ShipList', () => {
  it('should pass on list all products', async () => {
    const {getByTestId} = await waitFor(() => render(<ShipsList />));

    expect(getByTestId('shipItem_1')).toBeDefined();
    expect(getByTestId('shipItem_2')).toBeDefined();
  });

  it('should pass on add ship to cart', async () => {
    const {getByTestId} = await waitFor(() => render(<ShipsList />));

    fireEvent.press(getByTestId('shipItemButton_1'));

    expect(mockAddProduct).toHaveBeenCalled();
    expect(mockAddedProduct.id).toBe('1');
  });

  it('should pass on remove ship from cart', async () => {
    const {getByTestId} = await waitFor(() => render(<ShipsList />));

    fireEvent.press(getByTestId('shipItemButton_2'));

    expect(mockRemoveProduct).toHaveBeenCalled();
    expect(mockRemovedProductId).toBe('2');
  });
});