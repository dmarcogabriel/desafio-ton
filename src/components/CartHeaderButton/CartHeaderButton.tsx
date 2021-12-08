import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {ButtonContainer} from './styles';
import {useNavigation} from '@react-navigation/native';
import {CartScreenProps} from '../../types';

export const CartHeaderButton = () => {
  const {navigate} = useNavigation<CartScreenProps>();

  const handleGoToCart = () => navigate('Cart');

  return (
    <ButtonContainer testID="cartHeaderButton" onPress={handleGoToCart}>
      <MIcon name="shopping-cart" size={24} />
    </ButtonContainer>
  );
};
