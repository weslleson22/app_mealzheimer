import React, { useEffect } from 'react';
//import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';
import './ignoreWarnings';
import Routes  from './src/routes';
import { PlantProps } from './src/libs/storage';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import { Welcome01 } from './src/pages01/Welcome01';
import Routes_Tarefas from './src/pages01/routes';
import { TelaPrincipal } from './src/screen/TelaPrincipal';
import Routes_Tarefas1 from './src/screen/routes';
import RoutesTelaPrincipal from './src/screen/routes';
import { Welcome } from './src/pages/Welcome';



export default function App(){
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });


    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      }
    )

    return () => subscription.remove();

     async function notifications() {    
       await Notifications.cancelAllScheduledNotificationsAsync();      

       const data = await Notifications.getAllScheduledNotificationsAsync();
       console.log("######## NOTIFICAÇÕES AGENDAS ########")
       console.log(data);
     }

     notifications();
  },[])

 /* if(!fontsLoaded)
    return <AppLoading />
   */ 
  return (
   <Routes />
    //<Welcome/>
    //<RoutesTelaPrincipal/>
   //<TelaPrincipal/>
   //<HomeEnd/>
  )
}