import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Button(){
    return(
        <TouchableOpacity style={styles.container}>
            <Text style ={styles.text}>
                Confimar
            </Text>
           
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({

        container:{
            backgroundColor: colors.blue,
            height: 56,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text:{
            fontSize: 16,
            color: colors.white,
            fontFamily: colors.blue
        }
})