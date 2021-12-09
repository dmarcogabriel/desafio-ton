import {Ship} from 'src/types';

export interface CartItemProps {
  ship: Ship;
  onRemoveItem: (id: string) => void;
}
