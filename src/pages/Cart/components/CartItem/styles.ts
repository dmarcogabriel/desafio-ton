import styled from 'styled-components/native';

export const CartItemContainer = styled.View`
  flex-direction: row;
  padding: 8px 0;
  align-items: center;
  justify-content: space-between;
`;

export const CartItemContent = styled.View``;

export const CartItemName = styled.Text`
  font-size: 16px;
`;

export const CartItemPrice = styled.Text`
  font-size: 14px;
`;

export const CartItemRemoveButton = styled.TouchableOpacity`
  border: 1px solid red;
  border-radius: 100px;
  background-color: red;
  padding: 2px;
`;
