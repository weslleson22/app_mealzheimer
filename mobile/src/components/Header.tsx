import UserImg from '../assets/idoso.png';
import AsyncStorange from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
//import UserImg from '../assets/paulo.jpg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadStorangeUsername() {
            const user = await AsyncStorange.getItem('@plantmanager:user');

            setUserName(user || '')
        }

        loadStorangeUsername();
    }, [])

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>

            <Image source={UserImg} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },
    greeting: {
        fontSize: 32,
        color: colors.blue,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.blue,
        lineHeight: 40
    },
    image: {
        width:85,
        height:85,
        borderRadius: 40
    }
})
