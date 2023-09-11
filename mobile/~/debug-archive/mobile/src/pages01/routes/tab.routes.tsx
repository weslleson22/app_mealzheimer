/*import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { HomeSelect } from '../../pages/HomeSelect';
import { TarefasSelect } from '../TarefasSelect';


const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return(
        <AppTab.Navigator
            tabBarOptions={{
                activeTintColor: colors.blue,
                inactiveTintColor: colors.blue,
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 88
                },
            }}>
                <AppTab.Screen
                    name="Nova Planta"
                    component={TarefasSelect}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <MaterialIcons
                                name="add-circle-outline"
                                size={size}
                                color={color}
                            />
                        )),
                        headerShown: false,
                    }}
                />

<AppTab.Screen
                    name="Minhas Plantas"
                    component={MyPlants}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <MaterialIcons
                                name="format-list-bulleted"
                                size={size}
                                color={color}
                            />
                        )),
                        headerShown: false,
                    }}
                />
            </AppTab.Navigator>
    )
}

export default AuthRoutes;*/