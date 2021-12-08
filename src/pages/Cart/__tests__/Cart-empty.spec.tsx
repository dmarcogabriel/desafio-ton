import React from 'react';
import {render} from '@testing-library/react-native';
import {Cart} from '../Cart';
import {Ship} from 'src/types';

const mockProductList: Ship[] = [];
jest.mock('../../../hooks', () => ({
  useCart: () => ({
    productList: mockProductList,
  }),
}));

describe('pages/Cart empty', () => {
  it('should pass on show "empty cart" message', () => {
    const {getByTestId} = render(<Cart />);

    const emptyCartMessage = getByTestId('emptyCartMessage');

    expect(emptyCartMessage.children[0]).toBe('Cart is Empty!');
  });
});
