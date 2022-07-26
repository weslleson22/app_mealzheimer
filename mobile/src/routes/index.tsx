import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackRoutes from './stack.routes';
import {View} from 'react-native'

const Routes = () => {
  return (
      <NavigationContainer>
          <StackRoutes />
      </NavigationContainer>
  )
}

export default Routes;