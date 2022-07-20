import { Jost_100Thin_Italic } from "@expo-google-fonts/jost";
import { NavigationContainerRefContext, useNavigation } from "@react-navigation/native";

import React, { useState } from "react";
import { 
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
//expo install @react-native-async-storage/async-storage > Usada para fazer o armazenamento local
//KeyboardAvoidingVie é responsavel por não fazer o button sumir quando estiver digitando o text
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function UserIdentification(){
    const[isFocused, setIsFocused]=useState(false);
    const[isFilled, setIsFilled]=useState(false);
    const [name, setName] =useState<string>();
    function handleInputBlur(){
        setIsFocused(false)
        setIsFilled(!!name); // Se fica algum conteudo do nome vai continuia com a cor
    }
    function handleInputForcus(){
        setIsFocused(true)
    }
    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);
    }

    const navigation =useNavigation();
   
    async function handleSumit(){
        if(!name)
        return Alert.alert('Me diz como chamar você🥺');

        try {
            await AsyncStorage.setItem('@app:user', name);
        } catch(err) {
            return Alert.alert('Não foi possível salvar o seu nome 😥');
        }
        
        navigation.navigate('Confirmation', {
            title: 'Prontinho',
            subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
            buttonTitle: 'Começar',
            icon: 'smile',
            nextScreen: 'HomeSelect'
        });
	}

    return(
        <SafeAreaView style={styles.container}>
           <KeyboardAvoidingView style={styles.container}
           behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
           >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                            <Text style={styles.emoji}>
                            {isFilled? '😆':'😊'} 
                            </Text >

                            <Text style={styles.title}>
                                Como podemos{'\n'} 
                                chamar você?
                            </Text>
                            </View>
                            <TextInput
                            style={[styles.input,
                            (isFocused || isFilled) && 
                            {borderColor: colors.blue}
                            ]}

                            placeholder= "Digite um nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputForcus}
                            onChangeText={handleInputChange}
                            />

                            <View style={styles.footer}>

                            <Button 
                                title="Confirmar"
                                onPress={handleSumit}
                            /> 
                            </View>
                            </View>               
                    </View>
                
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',


    },
    content:{
        flex: 1,
        width: '100%',

    },
    form:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    emoji:{
        fontSize: 44
    },
    input:{
        borderBottomWidth: 1,
        borderBottomColor: colors.blue,
        color: colors.blue,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title:{
        fontSize: 32,
        textAlign: 'center',
        color: colors.blue,
        fontFamily: fonts.heading,
        marginTop:20
    }, 
    footer:{
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    },
    header:{
        alignItems: 'center'
    }
});