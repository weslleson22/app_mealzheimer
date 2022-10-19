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
import { TelaPrincipal } from '../screen/TelaPrincipal';
import { TelaEndereco } from '../pages01/TelaEndereco';
import {TelaPoints } from '../pages01/TelasAppEndereco/Points';
import TelaDetail from '../pages01/TelasAppEndereco/Detail';
//import { TelaEndereco } from '../pages01/TarefasSelect1';
//import AuthRoutes from './tab.routes';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
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
            component={AuthRoutes}
        />
        <stackRoutes.Screen
            name='PlantSave'
            component={PlantSave}
        />
        <stackRoutes.Screen 
            name='MyPlants'
            component={AuthRoutes}
        />
        <stackRoutes.Screen 
            name='Welcome01'
            component={Welcome01}
        />
        <stackRoutes.Screen 
            name='TelaEndereco'
            component={TelaEndereco}
        />  
         <stackRoutes.Screen 
            name='TarefasSelect'
            component={TarefasSelect}
        />        
        <stackRoutes.Screen 
            name='TelaPrincipal'
            component={TelaPrincipal}
        />
        <stackRoutes.Screen 
            name='Points'
            component={TelaPoints}
        />
        <stackRoutes.Screen 
            name='Detail'
            component={TelaDetail}
        />
                  
    </stackRoutes.Navigator>
)

export default AppRoutes;