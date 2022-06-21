import React from "react";
import {Text, View, StyleSheet} from 'react-native';
export default function App(){

  return(
    <View style={style.container}>
      <Text>
        Mealzheimer
      </Text>
    </View>

  )
}

const style = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent:'center', 
    alignContent: 'center'
  }
})