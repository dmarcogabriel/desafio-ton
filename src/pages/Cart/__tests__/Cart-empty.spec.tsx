import React from 'react';
import {render} from '@testing-library/react-native';
import {Cart} from '../Cart';
import {Ship} from 'src/types';

const mockShipList: Ship[] = [];
jest.mock('../../../hooks', () => ({
  useCart: () => ({
    shipList: mockShipList,
  }),
}));

describe('pages/Cart empty', () => {
  it('should pass on show "empty cart" message', () => {
    const {getByTestId} = render(<Cart />);

    const emptyCartMessage = getByTestId('emptyCartMessage');

    expect(emptyCartMessage.children[0]).toBe('Cart is Empty!');
  });
});
