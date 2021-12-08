import {useContext, useCallback, useEffect} from 'react';
import {CartContext} from '../../contexts/Cart';
import {Ship} from '../../types';

export const useCart = () => {
  const {productList, setProductList, setTotalPrice, totalPrice} =
    useContext(CartContext);

  const updateTotalPrice = (cartProducts: Ship[]): number => {
    let prices = 0;
    cartProducts
      .map(product => {
        return parseFloat(product.cost_in_credits);
      })
      .forEach(price => {
        prices += price;
      });
    return prices;
  };

  const addProduct = useCallback(
    (product: Ship) => {
      const updatedProductList = [...productList, product];
      setProductList(updatedProductList);
    },
    [productList, setProductList],
  );

  const removeProductById = useCallback(
    (id: string) => {
      const filterProduct = (product: any): boolean => {
        return product.id !== id;
      };

      setProductList(oldProductList => [
        ...oldProductList.filter(filterProduct),
      ]);
    },
    [setProductList],
  );

  const resetCart = () => {
    setProductList([]);
    setTotalPrice(0);
  };

  useEffect(() => {
    setTotalPrice(updateTotalPrice(productList));
  }, [productList, setTotalPrice]);

  return {productList, addProduct, removeProductById, totalPrice, resetCart};
};
