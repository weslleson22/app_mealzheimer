import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeSelect } from '../../pages/HomeSelect';
import AuthRoutes from '../../routes/tab.routes';




import colors from '../../styles/colors';
import { TarefasSelect } from '../TarefasSelect';
import { TelaPrincipal } from '../TelaPrincipal';
import { Welcome01 } from '../Welcome01';
//import AuthRoutes from './tab.routes';

const stackRoutes1 = createStackNavigator();

const AppRoutesTelaPrincipal: React.FC = () => (
    <stackRoutes1.Navigator
     //   headerMode='none'
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: colors.white
            },
            
        }}
    >
        <stackRoutes1.Screen 
            name='TelaPrincipal'
            component={TelaPrincipal}
        />

        <stackRoutes1.Screen 
            name='TarefasSelect'
            component={TarefasSelect}
        />
       <stackRoutes1.Screen 
            name='HomeSelect'
            component={AuthRoutes}
        />
             
          
    </stackRoutes1.Navigator>
)

export default AppRoutesTelaPrincipal;