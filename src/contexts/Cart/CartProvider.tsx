import React, {createContext, useState} from 'react';
import {CartProviderProps} from './CartProviderProps.interface';
import {CartContextValue} from './CartContextValue.interface';
import {Ship} from '../../types';

export const CartContext = createContext<CartContextValue>({
  shipList: [],
  setShipList: () => {},
  setTotalPrice: () => {},
  totalPrice: 0,
});

export const CartProvider = ({
  children,
  ships = [],
}: CartProviderProps): JSX.Element => {
  const [shipList, setShipList] = useState<Ship[]>(ships);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  return (
    <CartContext.Provider
      value={{
        shipList,
        setShipList,
        totalPrice,
        setTotalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
};
