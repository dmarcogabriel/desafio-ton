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
  const {productList, removeProductById, totalPrice} = useCart();

  return (
    <CartContainer>
      {!productList.length ? (
        <CartIsEmptyText testID="emptyCartMessage">
          Cart is Empty!
        </CartIsEmptyText>
      ) : (
        <CartList
          data={productList}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <CartProductCount testID="productsCount">{`${productList.length} produtos adicionados:`}</CartProductCount>
          }
          renderItem={({item}) => (
            <CartItem onRemoveItem={removeProductById} product={item} />
          )}
          ListFooterComponent={
            <CartListFooter>
              <CartTotalPriceText testID="productsTotalPrice">{`Total: ${totalPrice}`}</CartTotalPriceText>
            </CartListFooter>
          }
        />
      )}
    </CartContainer>
  );
};
