import React, {useEffect, useCallback, useState} from 'react';
import styles, {ShipListContainer, ShipListFooter} from './styles';
import shipListService from './shipList.service';
import {Ship} from 'src/types';
import {ShipItem} from './components';
import {useCart} from '../../hooks';
import {ActivityIndicator} from 'react-native';

export const ShipsList = (): JSX.Element => {
  const [products, setProducts] = useState<Ship[]>([]);
  const {addProduct, productList, removeProductById} = useCart();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [canLoadMore, setCanLoadMore] = useState<boolean>(true);

  const handleAddToCart = (ship: Ship) => {
    addProduct(ship);
  };

  const handleRemoveFromCart = (id: string) => {
    removeProductById(id);
  };

  const isAddedToCart = (product: Ship) =>
    productList.some(productItem => productItem.id === product.id);

  const loadProductsFromService = useCallback(async () => {
    if (!isLoading && canLoadMore) {
      setIsLoading(true);
      const data = await shipListService.loadProducts(page);
      setProducts(oldProducts => [...oldProducts, ...data.results]);
      setCanLoadMore(!!data.next);
      setPage(page + 1);
      setIsLoading(false);
    }
  }, [isLoading, page, canLoadMore]);

  useEffect(() => {
    loadProductsFromService();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ShipListContainer
      data={products}
      keyExtractor={(_, i) => `${i + 1}`}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
      renderItem={({item}) => (
        <ShipItem
          ship={item}
          isAddedToCart={isAddedToCart(item)}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
        />
      )}
      ListFooterComponent={
        <ShipListFooter>
          {isLoading && <ActivityIndicator size={24} />}
        </ShipListFooter>
      }
      onEndReachedThreshold={0.1}
      onEndReached={() => loadProductsFromService()}
    />
  );
};
