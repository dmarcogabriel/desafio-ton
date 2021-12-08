import {Ship} from 'src/types';

export interface CartItemProps {
  product: Ship;
  onRemoveItem: (id: string) => void;
}
