import React, {useEffect, useCallback, useState} from 'react';
import {ShipListContainer} from './styles';
import shipListService from './shipList.service';
import {Ship} from 'src/types';
import {ShipItem} from './components';
import {useCart} from '../../hooks';

export const ShipsList = (): JSX.Element => {
  const [products, setProducts] = useState<Ship[]>([]);
  const {addProduct, productList, removeProductById} = useCart();

  const handleAddToCart = (ship: Ship) => {
    addProduct(ship);
  };

  const handleRemoveFromCart = (id: string) => {
    removeProductById(id);
  };

  const isAddedToCart = (product: Ship) =>
    productList.some(productItem => productItem.id === product.id);

  const loadProductsFromService = useCallback(async () => {
    const data = await shipListService.loadProducts();
    setProducts(data.results);
  }, []);

  useEffect(() => {
    loadProductsFromService();
  }, [loadProductsFromService]);

  return (
    <ShipListContainer
      data={products}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ShipItem
          ship={item}
          isAddedToCart={isAddedToCart(item)}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
        />
      )}
    />
  );
};
