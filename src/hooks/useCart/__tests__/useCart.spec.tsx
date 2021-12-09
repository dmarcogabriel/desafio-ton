import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {CartProvider, CartProviderProps} from '../../../contexts';
import {useCart} from '../useCart';
import {Ship} from 'src/types';

const mockShips: Ship[] = [
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
  {
    id: '3',
    name: 'Sentinel-class landing craft',
    model: 'Sentinel-class landing craft',
    manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
    cost_in_credits: '240000',
    length: '38',
    max_atmosphering_speed: '1000',
    crew: '5',
    passengers: '75',
    cargo_capacity: '180000',
    consumables: '1 month',
    hyperdrive_rating: '1.0',
    MGLT: '70',
    starship_class: 'landing craft',
    pilots: [],
    films: ['https://swapi.dev/api/films/1/'],
    created: '2014-12-10T15:48:00.586000Z',
    edited: '2014-12-20T21:23:49.873000Z',
    url: 'https://swapi.dev/api/starships/5/',
  },
];

describe('hooks/useCart', () => {
  const wrapper = ({children}: CartProviderProps) => (
    <CartProvider ships={[]}>{children}</CartProvider>
  );

  it('should pass on add product', async () => {
    const {result} = renderHook(() => useCart(), {wrapper});

    act(() => {
      result.current.addShip(mockShips[0]);
    });

    const [ship] = result.current.shipList;

    expect(ship.id).toBe('1');
    expect(ship.name).toBe('CR90 corvette');
    expect(ship.cost_in_credits).toBe('3500000');
    expect(await result.current.totalPrice).toBe(3500000);
  });

  it('should pass on remove product', () => {
    const {result} = renderHook(() => useCart(), {wrapper});

    act(() => {
      result.current.addShip(mockShips[0]);
      result.current.removeShipById('1');
    });

    expect(result.current.shipList).toHaveLength(0);
  });

  it('should pass on reset cart', () => {
    const {result} = renderHook(() => useCart(), {wrapper});

    act(() => {
      result.current.resetCart();
    });

    expect(result.current.totalPrice).toBe(0);
    expect(result.current.shipList).toHaveLength(0);
  });

  it('should pass on add multiple products', () => {
    const {result} = renderHook(() => useCart(), {wrapper});

    act(() => {
      result.current.addShip({...mockShips[0], cost_in_credits: '1000'});
    });

    act(() => {
      result.current.addShip({...mockShips[1], cost_in_credits: '1000'});
    });

    act(() => {
      result.current.addShip({...mockShips[2], cost_in_credits: '1000'});
    });

    const [ship1, ship2, ship3] = result.current.shipList;

    expect(ship1.id).toBe('1');
    expect(ship1.name).toBe('CR90 corvette');
    expect(ship1.cost_in_credits).toBe('1000');

    expect(ship2.id).toBe('2');
    expect(ship2.name).toBe('Star Destroyer');
    expect(ship2.cost_in_credits).toBe('1000');

    expect(ship3.id).toBe('3');
    expect(ship3.name).toBe('Sentinel-class landing craft');
    expect(ship3.cost_in_credits).toBe('1000');

    expect(result.current.totalPrice).toBe(3000);
  });
});
