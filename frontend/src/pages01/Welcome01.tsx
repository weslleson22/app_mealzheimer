import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logoIgm from "../pages01/assets/Tarefas.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
export function Welcome01(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wapper}>
                <Text style={styles.title}>
                Gerencie {'\n'}seu dia a dia de {'\n'}forma fácil.
                </Text>
            
                <Image source={logoIgm} 
                style={styles.image}
                resizeMode="contain"
                />
                <Text style={styles.emoji}>🤗</Text>
                 <Text style={styles.subtitle}>
                    Nós cuidamos de lembrar você    
                    sempre que precisar.
                
                </Text>
                <TouchableOpacity style={styles.button}
                activeOpacity={0.7}
                
               // onPress={handleStart}
            
                >
                <Text>
                    <Feather name="chevron-right"
                    style = {styles.buttonIcon}
                    >

                    </Feather>
                </Text>
            
            
                    </TouchableOpacity>
                </View>
                

                
            
        </SafeAreaView>
)


}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',

    }, 
    wapper:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30
    },
    title:{
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center', 
    color: colors.blue,
    marginTop: 30,
    fontFamily: fonts.heading,
    lineHeight: 40

    },
    subtitle:{
    textAlign: 'center',
    fontSize: 30,
    paddingHorizontal: 20,
    color: colors.blue,
    fontFamily: fonts.heading

    },
    button:{

    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:16,
    marginBottom:10,
    height:56,
    width: 56,


    },
    emoji: {
        fontSize: 50
    },
    buttonIcon:{
    color:colors.white,
    fontSize: 30

    }, image:{
    height: Dimensions.get('window').width*0.9
    },
    });