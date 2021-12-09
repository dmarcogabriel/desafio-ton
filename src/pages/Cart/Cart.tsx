import React from 'react';
import {
  CartContainer,
  CartIsEmptyText,
  CartList,
  CartProductCount,
  CartListFooter,
  CartTotalPriceText,
} from './styles';
import {useCart} from '../../hooks';
import {CartItem} from './components';

export const Cart = (): JSX.Element => {
  const {shipList, removeShipById, totalPrice} = useCart();

  return (
    <CartContainer>
      {!shipList.length ? (
        <CartIsEmptyText testID="emptyCartMessage">
          Cart is Empty!
        </CartIsEmptyText>
      ) : (
        <CartList
          data={shipList}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <CartProductCount testID="shipsCount">{`${shipList.length} added products:`}</CartProductCount>
          }
          renderItem={({item}) => (
            <CartItem onRemoveItem={removeShipById} ship={item} />
          )}
          ListFooterComponent={
            <CartListFooter>
              <CartTotalPriceText testID="shipsTotalPrice">{`Total: ${totalPrice}`}</CartTotalPriceText>
            </CartListFooter>
          }
        />
      )}
    </CartContainer>
  );
};
