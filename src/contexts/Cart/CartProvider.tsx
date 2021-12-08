import React, {createContext, useState} from 'react';
import {CartProviderProps} from './CartProviderProps.interface';
import {CartContextValue} from './CartContextValue.interface';
import {Ship} from '../../types';

export const CartContext = createContext<CartContextValue>({
  productList: [],
  setProductList: () => {},
  setTotalPrice: () => {},
  totalPrice: 0,
});

export const CartProvider = ({
  children,
  products = [],
}: CartProviderProps): JSX.Element => {
  const [productList, setProductList] = useState<Ship[]>(products);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  return (
    <CartContext.Provider
      value={{productList, setProductList, totalPrice, setTotalPrice}}>
      {children}
    </CartContext.Provider>
  );
};
