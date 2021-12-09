import styled from 'styled-components/native';

export const ShipItemContainer = styled.View``;

export const ShipItemImage = styled.Image`
  width: 150px;
  height: 150px;
`;

export const ShipItemName = styled.Text``;

export const ShipItemPrice = styled.Text``;

export const ShipItemButton = styled.TouchableOpacity``;

interface ShipItemButtonTextProps {
  isAddedToCart: boolean;
}

export const ShipItemButtonText = styled.Text`
  color: ${({isAddedToCart}: ShipItemButtonTextProps) =>
    isAddedToCart ? 'red' : 'green'};
`;
