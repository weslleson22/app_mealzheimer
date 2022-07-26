import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logoIgm from "../pages01/assets/Tarefas.png";
import { Button01 } from "../pages01/components/Button01";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function TelaPrincipal(){
 const navigation = useNavigation();
 
    function handlerPlants(){
        navigation.navigate("HomeSelect");
    }
    function handlerTarefas(){
        navigation.navigate("TarefasSelect");
    }
    return(
              <View style={styles.wapper}>
                <Text style={styles.title}>
                Menu
                </Text>
            

                <View style={styles.footer}>
                    <Button01
                        title={"Minhas Plantas"}
                        onPress={handlerPlants}
               />
               <Text>{'\n'}</Text>
               <Button01
                        title={"Minhas Tarefa"}
                        onPress={handlerTarefas}
               />
                              <Text>{'\n'}</Text>
               <Button01
                        title={"Dicas de Saúde"}
                        //onPress={handleMoveOn}
               />
                              <Text>{'\n'}</Text>
               <Button01
                        title={"Quem sou eu "}
                        //onPress={handleMoveOn}
               />
               
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
    wapper:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30
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
    }
    });