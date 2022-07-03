import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Confirmation } from '../pages/Confirmations';
import { HomeSelect } from '../pages/HomeSelect';
//import { PlantSave } from '../pages/PlantSave';
import { UserIdentification } from '../pages/UserIdentification';
import { Welcome } from '../pages/Welcome';
import colors from '../styles/colors';
//import AuthRoutes from './tab.routes';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >
        <stackRoutes.Screen 
            name='Welcome'
            component={Welcome}
        />

        <stackRoutes.Screen 
            name='UserIdentification'
            component={UserIdentification}
        />

        <stackRoutes.Screen 
            name='Confirmation'
            component={Confirmation}
        />
        
        <stackRoutes.Screen 
            name='HomeSelect'
            component={HomeSelect}
        />
        
          
    </stackRoutes.Navigator>
)

export default AppRoutes;