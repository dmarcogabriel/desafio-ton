import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {ButtonContainer, ButtonBadge, ButtonBadgeText} from './styles';
import {useNavigation} from '@react-navigation/native';
import {CartScreenProps} from '../../types';
import {useCart} from '../../hooks';

export const CartHeaderButton = () => {
  const {navigate} = useNavigation<CartScreenProps>();
  const {shipList} = useCart();

  const handleGoToCart = () => navigate('Cart');

  const renderBadgeNumber = (): number | string =>
    shipList.length > 9 ? '9+' : shipList.length;

  return (
    <ButtonContainer testID="cartHeaderButton" onPress={handleGoToCart}>
      {!!shipList.length && (
        <ButtonBadge testID="cartButtonBadge">
          <ButtonBadgeText testID="cartButtonBadgeNumber">
            {renderBadgeNumber()}
          </ButtonBadgeText>
        </ButtonBadge>
      )}
      <MIcon name="shopping-cart" size={24} />
    </ButtonContainer>
  );
};
