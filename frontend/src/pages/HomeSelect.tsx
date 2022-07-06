import React, { useState } from "react";
import { useEffect } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList

} from "react-native";
import { EnviromentButton } from "../components/EnviromentButton";
import { Header } from "../components/Header";
import api from "../services/api"; 
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { CardPrimary } from "../components/Primary";

interface EnviromentProps{
    key: string;
    title: string;
}

interface FunctioonsProps{
    "id": string;
    "name": string;
    "about": string;
    "water_tips": string;
    "photo": string;
    "environments": [string],
    "frequency": {
      "times": number,
      "repeat_every": string;
        }
}


//yarn add axios
export function HomeSelect(){
    const [Enviroments, setEnvirtoments]= useState<EnviromentProps[]>([]);
    const [functioons, setFunctioons]= useState<FunctioonsProps[]>([]);

    const [environmentSelected, setenvironmentSelected] = useState('all');

    useEffect(()=>{
        async function fetchEnviroment(){
            const {data } = await api.get('plants_environments?_sort=title&_order=asc');
            //setEnvirtoments([{key: 'all',title: 'Todos',},...data]);}
         setEnvirtoments([
            {
                key: 'all',
                title: 'Todos',
            },
            ...data
          ]);//Caregrando os dados da api, casa, cozinham..  
        }
        fetchEnviroment();
    },[])

    useEffect(()=>{
        async function fetchFunctioons(){
            const {data } = await api.get('plants?_sort=name &_order=asc');
            //setEnvirtoments([{key: 'all',title: 'Todos',},...data]);}
         setFunctioons(data);//Caregrando os dados da api, casa, cozinham..  
        }


        fetchFunctioons();
    },[])    
    
    return(
        <View style={styles.container}>
            <View style={styles.Header}>                                
                    
                <Header/>
                <Text style={styles.title}>
                Estamos aqui para ajudar
                </Text>
                <Text style={styles.subtitle}>
                Escolha uma função abaixo.
                </Text>




            </View>

            
            <View>
            <FlatList 
                    data={Enviroments}
                    renderItem={({ item})=>(
                    <EnviromentButton 
                    title={item.title}
                     active/>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.EnviromentList}

                />
                          
            </View>
            <View style={styles.funcoes}>
                    <FlatList
                    data={functioons}
                    renderItem={({item})=>(
                        <CardPrimary data={item}/>
                     )}
                     showsVerticalScrollIndicator={false}
                     numColumns={2}
                    />


            </View>
    </View>
    )
}

//Start API 
//json-server ./src/services/server.json --host 192.168.0.6 --port 3333
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.background
       
    },
    Header:{
        paddingHorizontal: 30
    },
    title:{
        fontSize: 17,
        color: colors.blue,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 20

    },
    subtitle:{
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.blue

    },
    EnviromentList:{
        height:40,
        justifyContent:'center',
        paddingBottom:5,
        marginLeft:32,
        marginVertical: 32
    },
    funcoes:{
        flex:1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    }

})