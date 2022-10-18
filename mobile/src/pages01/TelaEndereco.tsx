import React from "react"
import {View, Text, StyleSheet, Image, ImageBackground} from "react-native"
import colors from "../styles/colors"
import { RectButton } from "react-native-gesture-handler"
import fonts from "../styles/fonts"
import {Feather as Icon} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"



export function TelaEndereco(){
    //const navigation = useNavigation();
    type Nav = {
        navigate: (value: string) => void;
      }
      
      const { navigate } = useNavigation<Nav>()
     
    function handleNavigateMap(){
        navigate("Points");
    }
    return(
        <ImageBackground source={require('../assets/mapa.png')}
         style={styles.container}
         imageStyle={{width:220, height:200, left: 10, right: 200, top:160}}
         >
            
        <View style={styles.main}>
        <Image source={require('../assets/destination-point.png')}/>
        <Text style={styles.title}>Localização das pessoas</Text>
        <Text style={styles.description}>Ajudamos pessoas a encontrarem suas localizações.</Text>
        
        </View>

        <View style={styles.footer}>
            <RectButton style={styles.button} onPress={handleNavigateMap}>
               <View style={styles.buttonIcon}>
                <Text>
                    <Icon name="arrow-right" color={"#fff"} size={40}/>
                </Text>
               </View>
               <Text style={styles.buttonText}>Buscar</Text>

            </RectButton>

        </View>
        </ImageBackground>
        
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
      backgroundColor: colors.blue,
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
      fontFamily: fonts.heading,
      fontSize: 16,
    }
  });