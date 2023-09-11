import  React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView, Linking } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon, FontAwesome } from "@expo/vector-icons"; 
import fonts from "../../../styles/fonts";
import {RectButton} from 'react-native-gesture-handler';
import api2 from "../../../services/api2";
import * as MailComposer from 'expo-mail-composer';

interface Params {
  points_id: number;
  uf: string;
  city:string;
}

interface Data {
  point: {
    image: string;
    image_url: string;
    name: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  };
  items: {
    title: string;
  }[];
}

const TelaDetail = () => {
  const [data, setData] = useState<Data>({} as Data);

  const navigation = useNavigation();
  const route = useRoute();
  
  const routeParams = route.params as Params;
  //console.log(route.params)
  useEffect(() => {
    api2.get(`points/${routeParams.points_id}`).then(response => {
      setData(response.data);
    });
  }, []);
    function handleNavigateBack(){
        navigation.goBack();
    }
    function handleWhatsapp() {
      Linking.openURL(`whatsapp://send?phone=${data.point.whatsapp}&text=Olá precido falar com você.`);
    }
  
    function handleComposeMail() {
      MailComposer.composeAsync({
        subject: 'Prezados(a), precisamos de suporte!',
        recipients: [data.point.email],
      })
    }
  
    if (!data.point){
      return null;
    }
    return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
            <Icon name="arrow-left" size={20} color="#2D9CDB"/>
        </TouchableOpacity>

        <Image style={styles.pointImage}source={{uri: data.point.image_url}}/>
        <Text  style={styles.pointName}>{data.point.name}</Text>
        
        <Text style={styles.pointItems}>{data.items.map(item=> item.title)}</Text>
        <View style={styles.textInfo}>
        <Text style={styles.textInfo}> Disponivel 24 horas do dia!</Text>

        </View>
        <View style={styles.address}>

        <Text style={styles.addressTitle}> 📍 Endereço:👇 </Text>
            
            <Text style={styles.addressContent}>{data.point.city}, {data.point.uf}</Text>
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
      alignContent: "center",
      
      
    },
    Info: {
      margin:20,
      alignItems: 'center',
      justifyContent: 'center',
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
    
      
      
      
    },
  
    textInfo: {
      color: '#34CB79',
      fontSize: 28,
      fontFamily: fonts.heading,
      textAlign: 'center',
      
      alignItems: 'center',
      justifyContent: 'center',
      
      
      
      
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