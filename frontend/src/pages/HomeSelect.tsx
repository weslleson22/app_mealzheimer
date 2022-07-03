import React from "react";
import { 
    View,
    Text,
    StyleSheet

} from "react-native";
import colors from "../styles/colors";


export function HomeSelect(){
    return(
        <View style={styles.container}>
            <Text>
                Escolha uma opçao

            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
    },

})