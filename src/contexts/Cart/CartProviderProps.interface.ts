import {ReactNode} from 'react';
import {Ship} from '../../types';

export interface CartProviderProps {
  ships: Ship[];
  children: ReactNode;
}
