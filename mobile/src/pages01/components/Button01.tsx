import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ButtonPorps extends TouchableOpacityProps {
    title: string;
}

export function Button01({ title, ...rest }: ButtonPorps) {
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
        
        alignItems: 'center'
    },
    text: {
         }
})