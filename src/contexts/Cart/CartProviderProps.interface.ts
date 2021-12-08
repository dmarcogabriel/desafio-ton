import {ReactNode} from 'react';
import {Ship} from '../../types';

export interface CartProviderProps {
  products: Ship[];
  children: ReactNode;
}
