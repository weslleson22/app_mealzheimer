import AsyncStorage from '@react-native-async-storage/async-storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, View, SafeAreaView, LogBox } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import waterdrop from '../assets/waterdrop.png';
import { Header } from '../components/Header';
import { Load } from '../components/Load';
import { PlantCardSecondary } from '../components/PlantCardSecondary';
import { loadPlant, PlantProps, removePlant, StoragePlantProps } from '../libs/storage';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function MyPlants() {

    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWatered, setNextWatered] = useState<string>();

    function handleRemove(plant: PlantProps) {
        Alert.alert('Remover', `Deseja remover a ${plant.name}?`,[
            {
                text: 'Não 🙏🏼',
                style: 'cancel'
            },
            {
                text: 'Sim 🥲',
                onPress: async () => {
                    try {
                        await removePlant(plant.id);
                        setMyPlants((oldData) => 
                            oldData.filter((item) => item.id !== plant.id)
                        );                        
                    } catch (error) {
                        Alert.alert('Não foi possível remover! 🥲');
                    }
                }
            }
        ])
        
    }

    useEffect(() => {
        async function loadStoragedData() {
            const plantsStoraged = await loadPlant();

            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(), 
                new Date().getTime(),
                { locale: pt }
            )

            console.log({nextTime})

            setNextWatered(
                `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime}.`
            )
            
            setMyPlants(plantsStoraged);
            setLoading(false);
        }  
            loadStoragedData();
            LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
        }, [])
    useEffect(() => {
        
      }, [])

    if(loading){
        return <Load />
    }

    return (
        <View style={styles.container1}>
        <ScrollView
        showsVerticalScrollIndicator={false}//Para não aparecer a barra do lado
        //
        >
        <View style={styles.container}>
            <Header />

            <View style={styles.spotlight}>
                <Image 
                    source={waterdrop}
                    style={styles.spotlightImage}
                />
                <Text style={styles.spotlightText}>{nextWatered}</Text>
            </View>

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>
                    Próximas regadas
                </Text>

                <FlatList
                    data={myPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                      <PlantCardSecondary data={item}
                        handleRemove={()=>{handleRemove(item)}}
                      />
                      //  <Text>ELemen</Text>
                    )}
                    showsVerticalScrollIndicator={false}
//                    horizontal
                    
                    contentContainerStyle={{ flex: 1 }}
                   // ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                />
            </View>
        </View>
        </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        paddingTop: 50,
        backgroundColor: colors.background
    },
    spotlight: {
        width: '100%',
        backgroundColor: colors.blue_light,
        paddingHorizontal: 20,
        borderRadius: 20,
        height: 110,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    spotlightImage: {
        width: 60,
        height: 60
    },
    spotlightText: {
        flex: 1,
        color: colors.blue,
        paddingHorizontal: 20,
        
    },
    plants: {
        flex: 1,
        width: '100%'
    },
    plantsTitle: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.blue,
        marginVertical: 20
    },
    container1:{
        flex:1,
        backgroundColor: colors.background
       
    },
})