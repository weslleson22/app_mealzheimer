import  React  from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon, FontAwesome } from "@expo/vector-icons"; 
import fonts from "../../../styles/fonts";
import {RectButton} from 'react-native-gesture-handler';
const TelaDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    console.log(route.params);
    function handleNavigateBack(){
        navigation.goBack();
    }

    function handleWhatsapp(){
        navigation.goBack();
    }

    function handleComposeMail(){
        navigation.goBack();
    }
    return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
            <Icon name="arrow-left" size={20} color="#2D9CDB"/>
        </TouchableOpacity>
        <Image style={styles.pointImage} source={{uri: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'}}/>
        <Text style={styles.pointName}>PESSOA X</Text>
        <Text style={styles.pointItems}>Categoria</Text>

        <View style={styles.address}>
            <Text style={styles.addressTitle}>Endereço</Text>
            <Text style={styles.addressContent}>São Luis, MA</Text>
        </View>
        <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleWhatsapp}>
          <FontAwesome name="whatsapp" size={20} color="#FFF" />
          <Text style={styles.buttonText}>Whatsapp</Text>
        </RectButton>

        <RectButton style={styles.button} onPress={handleComposeMail}>
          <Icon name="mail" size={20} color="#FFF" />
          <Text style={styles.buttonText}>E-mail</Text>
        </RectButton>
      </View>
    </View>
    </SafeAreaView>
    );
}

export default TelaDetail;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
      paddingTop: 40,
    },
  
    pointImage: {
      width: '100%',
      height: 300,
      resizeMode: 'cover',
      borderRadius: 150,
      marginTop: 120,
    },
  
    pointName: {
      color: '#322153',
      fontSize: 28,
      fontFamily: fonts.heading,
      marginTop: 24,
      alignItems: "center"
    },
  
    pointItems: {
      fontFamily: fonts.heading,
      fontSize: 16,
      lineHeight: 24,
      marginTop: 8,
      color: '#6C6C80'
    },
  
    address: {
      marginTop: 32,
    },
    
    addressTitle: {
      color: '#322153',
      fontFamily: fonts.heading,
      fontSize: 16,
    },
  
    addressContent: {
      fontFamily: fonts.heading,
      lineHeight: 24,
      marginTop: 8,
      color: '#6C6C80'
    },
  
    footer: {
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: '#999',
      paddingVertical: 20,
      paddingHorizontal: 32,
      paddingBottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    
    button: {
      width: '48%',
      backgroundColor: '#2D9CDB',
      borderRadius: 10,
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      marginLeft: 8,
      color: '#FFF',
      fontSize: 16,
      fontFamily: fonts.heading,
    },
  });