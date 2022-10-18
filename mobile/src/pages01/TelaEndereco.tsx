import React from "react"
import {View, Text, StyleSheet, Image} from "react-native"
import colors from "../styles/colors"
import fonts from "../styles/fonts"


export function TelaEndereco(){
    return(
        <View style={styles.container}>
            
        <View style={styles.main}>
        <Image source={require('../assets/destination-point.png')}/>
        <Text style={styles.title}>Localização das pessoas</Text>
        <Text style={styles.description}>Ajudamos pessoas a encontrarem suas localizações</Text>
        
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
    },

  
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    title: {
      color: '#322153',
      fontSize: 42,
      fontFamily: fonts.heading,
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: fonts.heading,
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  });