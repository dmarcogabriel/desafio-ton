import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {ButtonContainer, ButtonBadge, ButtonBadgeText} from './styles';
import {useNavigation} from '@react-navigation/native';
import {CartScreenProps} from '../../types';
import {useCart} from '../../hooks';

export const CartHeaderButton = () => {
  const {navigate} = useNavigation<CartScreenProps>();
  const {productList} = useCart();

  const handleGoToCart = () => navigate('Cart');

  return (
    <ButtonContainer testID="cartHeaderButton" onPress={handleGoToCart}>
      {!!productList.length && (
        <ButtonBadge testID="cartButtonBadge">
          <ButtonBadgeText testID="cartButtonBadgeNumber">
            {productList.length}
          </ButtonBadgeText>
        </ButtonBadge>
      )}
      <MIcon name="shopping-cart" size={24} />
    </ButtonContainer>
  );
};
