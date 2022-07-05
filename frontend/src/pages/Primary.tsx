import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface PlantsProps extends RectButtonProps{
    data:{
        name: string;
        photo: string,
    }
}

export const Primary = ({data, ...rest}: PlantsProps) =>{
    return(
        <RectButton
            style={styles.container}
            {...rest}
        >
            <Text style={styles.text}>

            </Text>
        </RectButton>
    )
}
const styles = StyleSheet.create({
    container:{
         flex: 1,
         maxWidth: '45%',
         backgroundColor: colors.shape,
         borderRadius: 20,
         paddingVertical: 10,
         alignItems: 'center',
         margin: 10
    },
    text:{
        color: colors.blue1,
        fontFamily: fonts.heading,
        marginVertical: 16

    }

})