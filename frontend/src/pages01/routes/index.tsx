import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackRoutes1 from "../routes/tarefas.routes"
import {View} from 'react-native'

const Routes_Tarefas = () => {
  return (
      <NavigationContainer>
          <StackRoutes1/>
      </NavigationContainer>
  )
}

export default Routes_Tarefas;