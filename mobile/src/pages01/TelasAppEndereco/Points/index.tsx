import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Feather as Icon } from "@expo/vector-icons"; 
import colors from "../../../styles/colors"
import fonts from "../../../styles/fonts"
import Constants from 'expo-constants';
import { useNavigation } from "@react-navigation/native";
import MapView from 'react-native-maps';
export function TelaPoints(){
    type Nav = {
        navigate: (value: string) => void;
      }
      
      const { navigate } = useNavigation<Nav>()
      function handlerEndereco(){
        //navigation.
        navigate("TelaEndereco");
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={handlerEndereco}>
                <Icon name="arrow-left" size={30} color="#2D9CDB"/>
                
            </TouchableOpacity>
            <Text style={styles.title}>😃 Bem Vindo!</Text>
            <Text style={styles.description}>Encontre no mapa um ponto.!</Text>

            <View style={styles.mapContainer}>
                 <MapView style={styles.map}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 20 + Constants.statusBarHeight,
    },
  
    title: {
      fontSize: 20,
      fontFamily: fonts.heading,
      marginTop: 24,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 4,
      fontFamily: fonts.text,
    },
  
    mapContainer: {
      flex: 1,
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      marginTop: 16,
    },
  
    map: {
      width: '100%',
      height: '100%',
    },
  
    mapMarker: {
      width: 90,
      height: 80, 
    },
  
    mapMarkerContainer: {
      width: 90,
      height: 70,
      backgroundColor: '#34CB79',
      flexDirection: 'column',
      borderRadius: 8,
      overflow: 'hidden',
      alignItems: 'center'
    },
  
    mapMarkerImage: {
      width: 90,
      height: 45,
      resizeMode: 'cover',
    },
  
    mapMarkerTitle: {
      flex: 1,
      fontFamily: 'Roboto_400Regular',
      color: '#FFF',
      fontSize: 13,
      lineHeight: 23,
    },
  
    itemsContainer: {
      flexDirection: 'row',
      marginTop: 16,
      marginBottom: 32,
    },
  
    item: {
      backgroundColor: '#fff',
      borderWidth: 2,
      borderColor: '#eee',
      height: 120,
      width: 120,
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingTop: 20,
      paddingBottom: 16,
      marginRight: 8,
      alignItems: 'center',
      justifyContent: 'space-between',
  
      textAlign: 'center',
    },
  
    selectedItem: {
      borderColor: '#34CB79',
      borderWidth: 2,
    },
  
    itemTitle: {
      fontFamily: 'Roboto_400Regular',
      textAlign: 'center',
      fontSize: 13,
    },
  });