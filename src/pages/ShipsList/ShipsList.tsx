import React, {useEffect, useCallback, useState} from 'react';
import styles, {ShipListContainer, ShipListFooter} from './styles';
import shipListService from './shipList.service';
import {Ship} from 'src/types';
import {ShipItem} from './components';
import {useCart} from '../../hooks';
import {ActivityIndicator} from 'react-native';

export const ShipsList = (): JSX.Element => {
  const [ships, setShips] = useState<Ship[]>([]);
  const {addShip, shipList, removeShipById} = useCart();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [canLoadMore, setCanLoadMore] = useState<boolean>(true);

  const isAddedToCart = (ship: Ship) =>
    shipList.some(shipItem => shipItem.id === ship.id);

  const loadShipsFromApi = useCallback(async () => {
    if (!isLoading && canLoadMore) {
      setIsLoading(true);
      const data = await shipListService.loadShips(page);
      setShips(oldShips => [...oldShips, ...data.results]);
      setCanLoadMore(!!data.next);
      setPage(page + 1);
      setIsLoading(false);
    }
  }, [isLoading, page, canLoadMore]);

  useEffect(() => {
    loadShipsFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ShipListContainer
      data={ships}
      keyExtractor={(_, i) => `${i + 1}`}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
      renderItem={({item}) => (
        <ShipItem
          ship={item}
          isAddedToCart={isAddedToCart(item)}
          onAddToCart={addShip}
          onRemoveFromCart={removeShipById}
        />
      )}
      ListFooterComponent={
        <ShipListFooter>
          {isLoading && <ActivityIndicator size={24} />}
        </ShipListFooter>
      }
      onEndReachedThreshold={0.1}
      onEndReached={() => loadShipsFromApi()}
    />
  );
};
