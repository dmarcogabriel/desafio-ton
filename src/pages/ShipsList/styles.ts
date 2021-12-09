import {FlatList, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const ShipListContainer = styled.FlatList`
  flex: 1;
  background-color: #fff;
` as unknown as typeof FlatList;

export const ShipListFooter = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export default StyleSheet.create({
  listContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
});
