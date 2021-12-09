import {Dispatch, SetStateAction} from 'react';
import {Ship} from '../../types';

export interface CartContextValue {
  shipList: Ship[];
  totalPrice: number;
  setShipList: Dispatch<SetStateAction<Ship[]>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
}
