import {useContext, useCallback, useEffect} from 'react';
import {CartContext} from '../../contexts/Cart';
import {Ship} from '../../types';

export const useCart = () => {
  const {shipList, setShipList, setTotalPrice, totalPrice} =
    useContext(CartContext);

  const updateTotalPrice = (shipsInCart: Ship[]): number => {
    let prices = 0;
    shipsInCart
      .map(ship => {
        return parseFloat(ship.cost_in_credits);
      })
      .forEach(price => {
        prices += price;
      });
    return prices;
  };

  const addShip = useCallback(
    (ship: Ship) => {
      const updatedShipList = [...shipList, ship];
      setShipList(updatedShipList);
    },
    [shipList, setShipList],
  );

  const removeShipById = useCallback(
    (id: string) => {
      const filterShip = (ship: any): boolean => {
        return ship.id !== id;
      };

      setShipList(oldShipList => [...oldShipList.filter(filterShip)]);
    },
    [setShipList],
  );

  const resetCart = () => {
    setShipList([]);
    setTotalPrice(0);
  };

  useEffect(() => {
    setTotalPrice(updateTotalPrice(shipList));
  }, [shipList, setTotalPrice]);

  return {
    shipList,
    addShip,
    removeShipById,
    totalPrice,
    resetCart,
  };
};
