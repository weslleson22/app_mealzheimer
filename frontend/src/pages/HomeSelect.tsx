import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList

} from "react-native";
import { EnviromentButton } from "../components/EnviromentButton";
import { Header } from "../components/Header";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

//yarn add axios
export function HomeSelect(){
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
                    data={[1,2,3,4,5]}
                    renderItem={({ item})=>(
                    <EnviromentButton 
                    title="Cozinha"
                     active/>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.EnviromentList}

                />

            
            </View>
    </View>
    )
}
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
    }

})