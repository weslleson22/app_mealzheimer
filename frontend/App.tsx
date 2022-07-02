import React from "react";
import {Text, View, StyleSheet} from 'react-native';
import { Welcome } from "./src/pages/Welcome";
import { useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from "@expo-google-fonts/jost";
import AppLoading from 'expo-app-loading';
import { UserIdentification } from "./src/pages/UserIdentification";
import { Confirmation } from "./src/pages/Confirmations";

/*
expo install expo-app-loading vai ajuda a segurar a tela de splash até a fonte ser carregada.

*/
export default function App(){

 const [fonstsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });
  if (!fonstsLoaded){
    return  <AppLoading/>
  
  }

  return(
   //<Welcome/>
   //<UserIdentification/>
   <Confirmation/>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent:'center', 
    alignContent: 'center'
  }
})