import React from "react";
import { 
    View,
    StyleSheet,
    Text,
    Image } 
    from "react-native";
import colors from "../styles/colors";
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import userIgm from '../assets/idoso.png';
import fonts from "../styles/fonts";
//jj

export function Header(){
    return (
        <View style={styles.container}>
          
          <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.UserName}>Weslseon</Text>
           </View>
                   

        <Image source ={userIgm} style={styles.image}/>   
        </View>
    )
}
//npm i react-native-iphone-x-helper --save
const styles = StyleSheet.create({ 
    container:{
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingVertical:20,
        marginTop: getStatusBarHeight(),
        
    },
    image:{
        width: 90,
        height: 90,
        borderRadius: 50,
    },

        greeting:{
            fontSize: 32,
            fontFamily: fonts.heading,
            color: colors.blue,
            
        },
        UserName:{
            fontSize:32,
            fontFamily: fonts.heading,
            color: colors.blue,
            lineHeight: 40
        }
})