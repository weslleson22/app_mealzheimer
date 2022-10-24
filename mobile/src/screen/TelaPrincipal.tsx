import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollViewBase} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {SvgUri} from 'react-native-svg';
import logoIgm from "../pages01/assets/Tarefas.png";
import { Button01 } from "../pages01/components/Button01";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function TelaPrincipal(){
 const navigation = useNavigation();
 type Nav = {
    navigate: (value: string) => void;
  }
  
  const { navigate } = useNavigation<Nav>()
 
    function handlerPlants(){
        //navigation.
        navigate("HomeSelect");
    }
    function handlerTarefas(){
        //navigation.
        navigate("TarefasSelect");
    }
    function handlerEndereco(){
        //navigation.
        navigate("TelaEndereco");
    }

    return(
            <View style={styles.wapper}>

            <View style={styles.containerProdutor}>
            <TouchableOpacity style={styles.item} onPress={handlerEndereco}>
                <SvgUri width={100} height={100} uri="https://raw.githubusercontent.com/weslleson22/ImagensAppAlzheimer/193ecada8163d83be33876cca876bcf8a5e27426/familialogo.svg"/>
                <Text style={styles.itemTitle}>Minha Familia</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}  onPress={handlerPlants}>
                <SvgUri width={100} height={100} uri="https://raw.githubusercontent.com/weslleson22/ImagensAppAlzheimer/50a5484469b7eee26488960f24f3cd10b57a8329/Minhas%20Plantas.svg"/>
                <Text style={styles.itemTitle}>Minhas Plantas</Text>
              </TouchableOpacity>

              
            </View>

            <View style={styles.containerProdutor1}>
            <TouchableOpacity style={styles.item}  onPress={handlerTarefas} >
                <SvgUri width={100} height={100} uri="https://raw.githubusercontent.com/weslleson22/ImagensAppAlzheimer/e59ae627a17ed3d4a01178f78690396d31fe8f16/Minhas_Tarefas.svg"/>
                <Text style={styles.itemTitle}>Minhas Tarefas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <SvgUri width={100} height={100} uri="https://raw.githubusercontent.com/weslleson22/ImagensAppAlzheimer/b1c57cf835d7e8fa7b1a76746c858fe444626e9d/Meus_endere%C3%A7o.svg"/>
                <Text style={styles.itemTitle}>Meus endereço</Text>
              </TouchableOpacity>
                            
            </View>


            


            

                </View>
                

 
)


}

const styles = StyleSheet.create({

   
   
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',

    }, 
    containerProdutor: {
        flexDirection: "row"
   },
   containerProdutor1: {
    flexDirection: "row",
    marginBottom: 200
},
containerProdutor3: {
    flexDirection: "row",
    
},
    wapper:{
    
    alignItems: 'center',
    flex:1,
    //backgroundColor: '#DADADA',
    //borderWidth: 10,
    //borderColor: '#DADADA',
    //borderRadius: 10,
    paddingHorizontal: 16,
    justifyContent: "center",
    //paddingBottom: 16,
    
    
    
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
    subtitle:{
    textAlign: 'center',
    fontSize: 30,
    paddingHorizontal: 20,
    color: colors.blue,
    fontFamily: fonts.heading

    },
    button:{

    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:16,
    marginBottom:10,
    height:56,
    width: 56,


    },
    emoji: {
        fontSize: 50
    },
    buttonIcon:{
    color:colors.white,
    fontSize: 30

    }, image:{
    height: Dimensions.get('window').width*0.9
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    },
    item: {
        backgroundColor: '#F0F0F0',
        
        borderColor: '##F0F0F0',
        height: 160,
        width: 160,
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingTop: 10,
        marginVertical:10,
        marginHorizontal:10,
        paddingBottom: 16,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    
        textAlign: 'center',
      },
    
      selectedItem: {
        borderColor: '#061FFF',
        borderWidth: 2,
      },
    
      itemTitle: {
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.blue,
        fontSize: 15,
      },
    });