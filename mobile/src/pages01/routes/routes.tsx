//Criação das rotas das tela meus endereço. :)

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//import Points  from "../TelasAppEndereco/Points";
import Detail from "../TelasAppEndereco/Detail";

const AppStack = createStackNavigator();
// <AppStack.Screen name="Points" component={Points}/>
const Routes = () =>{
    return(
        <NavigationContainer>
            <AppStack.Navigator>
               
                <AppStack.Screen name="Detail" component={Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;