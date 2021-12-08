import React from 'react';
import {CartItemProps} from './CartItemProps.interface';
import {CartItemContainer, CartItemName, CartItemRemoveButton} from './styles';
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
      <CartItemName testID={`cartItemName_${product.id}`}>
        {product.name}
      </CartItemName>
      <CartItemRemoveButton
        testID={`cartItemRemoveButton_${product.id}`}
        onPress={handleRemoveItem}>
        <MIcon name="close" size={24} />
      </CartItemRemoveButton>
    </CartItemContainer>
  );
};
