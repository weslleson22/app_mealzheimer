import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


interface EnviromentsButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

export function EnviromentButton({ 
    title, 
    active = false,
    ...rest
}: EnviromentsButtonProps) {
    return(
        <RectButton
        style={[
            styles.container,
            active && styles.containerActive
        ]}
        {...rest}
        >
             <Text style={[
                styles.text,
                active && styles.textActive    
            ]}
                >{ title }</Text>
  
        </RectButton>
    );   

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        width: 76,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginHorizontal: 10,
        marginRight: 5,
        
        
    },
    containerActive: {
        backgroundColor: colors.blue_light
    },
    text: {
        color: colors.blue,
        fontFamily: fonts.heading
    },
    textActive: {
        fontFamily: fonts.heading,
        color: colors.blue,
        
    }
})