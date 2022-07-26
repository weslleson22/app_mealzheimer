import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


interface ButtonPorps extends TouchableOpacityProps {
    title: string;
}

export function Menu({ title, ...rest }: ButtonPorps) {
    return (
        <TouchableOpacity 
            style={styles.container} 
            {...rest}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:  {
      
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading
    }
})