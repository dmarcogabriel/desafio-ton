import {Ship} from 'src/types';

export interface ShipItemProps {
  ship: Ship;
  onAddToCart: (ship: Ship) => void;
  onRemoveFromCart: (id: string) => void;
  isAddedToCart?: boolean;
}
