import React from "react"
import {View, Text, StyleSheet} from "react-native"
import colors from "../../../styles/colors"
import fonts from "../../../styles/fonts"

export function TelaPoints(){
    return(
        <View style={styles.container}>
      
      <Text style={styles.title}>
                :)
                </Text>
        </View>
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
})
