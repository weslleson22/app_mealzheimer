import React from "react";
import {SafeAreaView, Text, View, Image, TouchableOpacity, StyleSheet } from "react-native"; 
//TouchableOpacity esse ele faz um feito de opacidade quando ele eh precionado.
import logoIgm from '../assets/logo.png';
import colors from "../styles/colors";

export function Welcome(){
    return(
        <SafeAreaView style={styles.container}>
            
        
            <Text style={styles.title}>
            Gerencie {'\n'}eu dia a dia de {'\n'}forma fácil.
            </Text>

            <Image source={logoIgm} style={styles.image}/>

            <Text style={styles.subtitle}>
            Nós cuidamos de lembrar você
            sempre que precisar.
            </Text>


            <TouchableOpacity style={styles.button}>
                <Text>
                    >
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',

    }, 
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center', 
        color: colors.blue,
        marginTop: 38
        
    },
    subtitle:{
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.blue
        
    },
    button:{

        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:16,
        marginBottom:10,
        height:56,
        width: 56
        
    },

    image:{
        width: 292,
        height: 284
    }
});