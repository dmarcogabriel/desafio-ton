import React from 'react';
import {CartItemProps} from './CartItemProps.interface';
import {
  CartItemContainer,
  CartItemContent,
  CartItemName,
  CartItemPrice,
  CartItemRemoveButton,
} from './styles';
import MIcon from 'react-native-vector-icons/MaterialIcons';

export const CartItem = ({ship, onRemoveItem}: CartItemProps): JSX.Element => {
  const handleRemoveItem = () => {
    onRemoveItem(ship.id);
  };

  return (
    <CartItemContainer testID={`cartItem_${ship.id}`}>
      <CartItemContent>
        <CartItemName testID={`cartItemName_${ship.id}`}>
          {ship.name}
        </CartItemName>
        <CartItemPrice testID={`cartItemPrice_${ship.id}`}>
          {`Price: ${ship.cost_in_credits}`}
        </CartItemPrice>
      </CartItemContent>
      <CartItemRemoveButton
        testID={`cartItemRemoveButton_${ship.id}`}
        onPress={handleRemoveItem}>
        <MIcon name="close" size={24} color="#fff" />
      </CartItemRemoveButton>
    </CartItemContainer>
  );
};
