import {Dispatch, SetStateAction} from 'react';
import {Ship} from '../../types';

export interface CartContextValue {
  productList: Ship[];
  totalPrice: number;
  setProductList: Dispatch<SetStateAction<Ship[]>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
}
