import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './Navigation';
import {CartProvider} from './contexts';

export const App = (): JSX.Element => (
  <CartProvider>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  </CartProvider>
);
