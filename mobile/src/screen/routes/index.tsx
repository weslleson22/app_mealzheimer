import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackRoutes1 from "./telas.routes"
import {View} from 'react-native'

const RoutesTelaPrincipal = () => {
  return (
      <NavigationContainer>
          <StackRoutes1/>
      </NavigationContainer>
  )
}

export default RoutesTelaPrincipal;