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

export const CartItem = ({
  product,
  onRemoveItem,
}: CartItemProps): JSX.Element => {
  const handleRemoveItem = () => {
    onRemoveItem(product.id);
  };

  return (
    <CartItemContainer testID={`cartItem_${product.id}`}>
      <CartItemContent>
        <CartItemName testID={`cartItemName_${product.id}`}>
          {product.name}
        </CartItemName>
        <CartItemPrice testID={`cartItemPrice_${product.id}`}>
          {`Price: ${product.cost_in_credits}`}
        </CartItemPrice>
      </CartItemContent>
      <CartItemRemoveButton
        testID={`cartItemRemoveButton_${product.id}`}
        onPress={handleRemoveItem}>
        <MIcon name="close" size={24} color="#fff" />
      </CartItemRemoveButton>
    </CartItemContainer>
  );
};
