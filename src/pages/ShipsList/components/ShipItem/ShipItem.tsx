import React, {memo} from 'react';
import {
  ShipItemContainer,
  ShipItemButton,
  ShipItemButtonText,
  ShipItemName,
  ShipItemImage,
} from './styles';
import {ShipItemProps} from './ShipItemProps.interface';
import {shipImagePlaceholder} from './assets';

export const ShipItem = memo(
  ({
    ship,
    onAddToCart,
    onRemoveFromCart,
    isAddedToCart = false,
  }: ShipItemProps): JSX.Element => {
    const handlePressButton = () => {
      if (isAddedToCart) {
        onRemoveFromCart(ship.id);
      } else {
        onAddToCart(ship);
      }
    };

    return (
      <ShipItemContainer testID={`shipItem_${ship.id}`}>
        <ShipItemImage
          testID={`shipItemImage_${ship.id}`}
          resizeMode="cover"
          source={shipImagePlaceholder}
        />
        <ShipItemName testID={`shipItemName_${ship.id}`}>
          {ship.name}
        </ShipItemName>
        <ShipItemButton
          testID={`shipItemButton_${ship.id}`}
          onPress={handlePressButton}>
          <ShipItemButtonText testID={`shipItemButtonText_${ship.id}`}>
            {isAddedToCart ? 'Remove From Cart' : 'Add To Cart'}
          </ShipItemButtonText>
        </ShipItemButton>
      </ShipItemContainer>
    );
  },
);
