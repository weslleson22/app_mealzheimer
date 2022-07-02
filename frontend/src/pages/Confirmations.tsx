import { Jost_100Thin_Italic, Jost_300Light } from "@expo-google-fonts/jost";
import React from "react";
import { SafeAreaView,
    StyleSheet, Text, View
        
} from "react-native";

import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Confirmation(){
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.emoji}>
            😆
            </Text>
            <Text style={styles.title}>
                Prontinho
            </Text>

            <Text style={styles.subtitle}>
            Agora vamos começar ajudar você a{'\n'}
            cuidar das suas rotinas com muito{'\n'}
            cuidado.
            </Text>
            <View style={styles.footer}>
            <Button/>
        </View>
        </View>

    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30

    },
    emoji:{
        fontSize:78,


    },
    title: {
        fontSize: 32,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.blue,
        lineHeight: 38, 
        marginTop: 15,
        
    },
    subtitle:{
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 10,
        color: colors.blue
  

    },
    footer:{
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
        
    }
});