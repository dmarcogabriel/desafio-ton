import React, {memo} from 'react';
import styles, {
  ShipItemContainer,
  ShipItemButton,
  ShipItemButtonText,
  ShipItemName,
  ShipItemImage,
  ShipItemPrice,
  ShipItemContent,
} from './styles';
import {ShipItemProps} from './ShipItemProps.interface';
import {shipImagePlaceholder} from './assets';
import {breakLongText} from '../../../../utils';

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
      <ShipItemContainer testID={`shipItem_${ship.id}`} style={styles.shadow}>
        <ShipItemImage
          testID={`shipItemImage_${ship.id}`}
          resizeMode="cover"
          source={shipImagePlaceholder}
        />
        <ShipItemContent>
          <ShipItemName testID={`shipItemName_${ship.id}`}>
            {breakLongText(ship.name)}
          </ShipItemName>
          <ShipItemPrice testID={`shipItemPrice_${ship.id}`}>
            {`Price: ${ship.cost_in_credits}`}
          </ShipItemPrice>
          <ShipItemButton
            testID={`shipItemButton_${ship.id}`}
            onPress={handlePressButton}>
            <ShipItemButtonText
              testID={`shipItemButtonText_${ship.id}`}
              isAddedToCart={isAddedToCart}>
              {isAddedToCart ? 'Remove From Cart' : 'Add To Cart'}
            </ShipItemButtonText>
          </ShipItemButton>
        </ShipItemContent>
      </ShipItemContainer>
    );
  },
);
