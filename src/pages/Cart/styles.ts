import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const CartContainer = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 16px;
`;

export const CartIsEmptyText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const CartList = styled.FlatList`` as unknown as typeof FlatList;

export const CartProductCount = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const CartListFooter = styled.View`
  align-self: flex-end;
`;

export const CartTotalPriceText = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;
