import React, { useState } from "react";
import { useEffect } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator

} from "react-native";
import { EnviromentButton } from "../components/EnviromentButton";
import { Header } from "../components/Header";
import api from "../services/api"; 
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { CardPrimary } from "../components/Primary";
import {Load} from '../components/Load';
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
    const [enviroments, setEnvirtoments]= useState<EnviromentProps[]>([]);
    const [functioons, setFunctioons]= useState<FunctioonsProps[]>([]);
    const [filterfunctioons, setFilterFunctioons]= useState<FunctioonsProps[]>([]);
    const [environmentSelected, setEnvironmentSelected] = useState('all');
    const [loading, setLoading] = useState(true);
    
    //Trabalhando carregamento da aplicação
    const [page, setPage]= useState(1);
    const [loadingMore, setLoadingMore]=useState(true);
    const [loadedAll, setloadedAll]=useState(false);
    
    
    function handleEnrivomentSelected(environment: string){
        setEnvironmentSelected(environment);

        if(environment=='all')
            return setFilterFunctioons(functioons);

        const filtered = functioons.filter(functioon =>
            functioon.environments.includes(environment)
            );
            setFilterFunctioons(filtered);
    }

    async function fetchFunctioons(){
        const {data } = await api
        .get(`plants?_sort=name&order=asc&_page=${page}&_limit=8`);
        //setEnvirtoments([{key: 'all',title: 'Todos',},...data]);}
     
    //Caregrando os dados da api, casa, cozinham..  
    if (!data)
        return setLoading(true);

    if (page > 1) {
        setFunctioons(oldValue => [...oldValue, ...data])
        setFilterFunctioons(oldValue => [...oldValue, ...data])
    } else {
        setFunctioons(data);
        setFilterFunctioons(data);
    }

    setLoading(false);
    setLoadingMore(false);
}

    function handleFetchMore(distance: number) { 
        if (distance < 1)
            return;

        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
        fetchFunctioons();
    }

  
    useEffect(()=>{
        async function fetchEnviroment(){
            const {data } = await api.get('plants_environments?_sort=title&order=asc');
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
        


        fetchFunctioons();
    },[])    
    if(loading)
        return <Load/>
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
                    data={enviroments}
                    renderItem={({ item})=>(
                    <EnviromentButton 
                    title={item.title}
                    active={item.key == environmentSelected}
                    onPress={()=>handleEnrivomentSelected(item.key)}

                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.EnviromentList}

                />
                          
            </View>
            <View style={styles.funcoes}>
                    <FlatList
                    data={filterfunctioons}
                    //data={functioons}
                    renderItem={({item})=>(
                         <CardPrimary data={item}/>
                     )}
                     showsVerticalScrollIndicator={false} 
                     numColumns={2}
                     onEndReached={({ distanceFromEnd }) => 
                     handleFetchMore(distanceFromEnd)}
                     onEndReachedThreshold={0.1} 
                     ListFooterComponent={
                         loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
                     }
                    />


            </View>
    </View>
    )
}

//Start API 
//json-server ./src/services/server.json --host 192.168.0.6 --port 3333
//Para usar animação
//yarn add lottie-react-native
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