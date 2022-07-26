import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Confirmation } from '../pages/Confirmations';
import { HomeSelect } from '../pages/HomeSelect';
import { PlantSave } from '../pages/PlantSave';
//import { PlantSave } from '../pages/PlantSave';
import { UserIdentification } from '../pages/UserIdentification';
import { Welcome } from '../pages/Welcome';
import colors from '../styles/colors';
import {MyPlants} from '../pages/MyPlants';
import AuthRoutes from './tab.routes';
import { Welcome01 } from '../pages01/Welcome01';
import { TarefasSelect } from '../pages01/TarefasSelect';
//import AuthRoutes from './tab.routes';

const stackRoutes = createStackNavigator();

const AppRoutes1_Tarefas: React.FC = () => (
    <stackRoutes.Navigator
     //   headerMode='none'
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: colors.white
            },
            
        }}
    >
        <stackRoutes.Screen 
            name='Welcome01'
            component={Welcome01}
        />
         <stackRoutes.Screen 
            name='TarefasSelect'
            component={TarefasSelect}
        />

        
    
          
    </stackRoutes.Navigator>
)

export default AppRoutes1_Tarefas;