import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const ShipItemContainer = styled.View`
  margin: 16px 16px;
  background-color: #fff;
`;

export const ShipItemImage = styled.Image`
  width: 170px;
  height: 170px;
  margin-bottom: 4px;
`;

export const ShipItemContent = styled.View`
  padding: 8px;
`;

export const ShipItemName = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin: 4px 0;
`;

export const ShipItemPrice = styled.Text`
  margin: 4px 0;
`;

export const ShipItemButton = styled.TouchableOpacity`
  border: 1px solid #333;
  border-radius: 4px;
  padding: 4px 0;
  align-items: center;
  justify-content: center;
  margin: 4px 0;
`;

interface ShipItemButtonTextProps {
  isAddedToCart: boolean;
}

export const ShipItemButtonText = styled.Text`
  color: ${({isAddedToCart}: ShipItemButtonTextProps) =>
    isAddedToCart ? 'red' : 'green'};
`;

export default StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
