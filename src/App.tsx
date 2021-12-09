import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './Navigation';
import {CartProvider} from './contexts';
import {StatusBar} from 'react-native';

export const App = (): JSX.Element => (
  <>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <CartProvider ships={[]}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </CartProvider>
  </>
);
