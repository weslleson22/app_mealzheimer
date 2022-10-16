import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';




import colors from '../../styles/colors';
import { TarefasSelect } from '../TarefasSelect';
import { TarefasSelect1 } from '../TarefasSelect1';
import { TelaEnd } from '../TelaEnd';
import { Welcome01 } from '../Welcome01';
//import AuthRoutes from './tab.routes';

const stackRoutes1 = createStackNavigator();

const AppRoutes1_Tarefas: React.FC = () => (
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
            name='Welcome01'
            component={Welcome01}
        />

        <stackRoutes1.Screen 
            name='TarefasSelect'
            component={TarefasSelect}
        />
        <stackRoutes1.Screen 
            name='TarefasSelect1'
            component={TarefasSelect1}
        />
      

        


        
          
    </stackRoutes1.Navigator>
)

export default AppRoutes1_Tarefas;