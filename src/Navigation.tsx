import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartHeaderButton} from './components';

// Pages Modules
import {ShipsList, Cart} from './pages';

const {Navigator, Screen} = createNativeStackNavigator();

export const Navigation = () => (
  <Navigator>
    <Screen
      name="ShipsList"
      component={ShipsList}
      options={{
        headerRight: CartHeaderButton,
      }}
    />
    <Screen name="Cart" component={Cart} />
  </Navigator>
);
