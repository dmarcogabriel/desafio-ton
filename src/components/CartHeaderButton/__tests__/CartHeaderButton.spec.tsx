import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {CartHeaderButton} from '../CartHeaderButton';

let mockNavigateScreen: string;
const mockNavigate = jest.fn((screen: string) => {
  mockNavigateScreen = screen;
});
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('components/CartHeaderButton', () => {
  it('should navigate to Cart', () => {
    const {getByTestId} = render(<CartHeaderButton />);

    const cartHeaderButton = getByTestId('cartHeaderButton');
    fireEvent.press(cartHeaderButton);

    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigateScreen).toBe('Cart');
  });
});
