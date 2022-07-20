import React, { useState } from "react";
import { Alert,
         StyleSheet,
         Text,
         View,
         Image,
         ScrollView,
         Platform,
         TouchableOpacity
 } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { color } from "react-native-reanimated";
import { useNavigation, useRoute } from "@react-navigation/native";

 import { SvgFromUri } from "react-native-svg";
import waterdrop from "../assets/waterdrop.png";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';
import { format, isBefore } from "date-fns";
import { PlantProps } from "../libs/storage";

interface Params{
    plant: PlantProps 
    
}
export function PlantSave() {

    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios');

    const navigation = useNavigation();
    const route = useRoute();

    const { plant } = route.params as Params;

    function handleChangeTime(event: Event, dateTime: Date | undefined) {
        //const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            // do the rest here
        //  }
        if(Platform.OS === 'android') {
            setShowDatePicker(oldState => !oldState);
        }

        if(dateTime && isBefore(dateTime, new Date())) {
            setSelectedDateTime(new Date());
            return Alert.alert('Escolha uma hora no futuro! ⏰')
        }

        if(dateTime) {
            setSelectedDateTime(dateTime);
        }
    }

    function handleOpenDateTimePickerForAndroid() {
        setShowDatePicker(oldState => !oldState);
    }


        return(
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            <View style={styles.container}>
                <View style={styles.plantInfo}>
                    <SvgFromUri
                    uri={plant.photo}
                    height={150}
                    width={150}
                    />

                    <Text style={styles.plantName}>{plant.name}</Text>

                    <Text style={styles.plantAbout}>{plant.about}</Text>
                    
                </View>

                <View style={styles.controller}>
                    <View style={styles.tipContainer}>
                        <Image source={waterdrop} style={styles.tipImage}/>
                        <Text style={styles.tipText}>
                            {plant.water_tips}
                        </Text>
                    </View>

                    <Text style={styles.alertLabel}>
                        Escolha o melhor horário para ser lembrado:
                    </Text>
                    {
                        showDatePicker && (
                            <DateTimePicker 
                                value={selectedDateTime}
                                mode='time'
                                display='default'
                                onChange={handleChangeTime}
                            />
                        )
                    }

                    {
                        Platform.OS === 'android' && (
                            <TouchableOpacity 
                            style={styles.dateTimePickerButton}
                            onPress={handleOpenDateTimePickerForAndroid}
                            >
                                <Text style={styles.dateTimePickerText}>
                                    {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
                                </Text>
                            </TouchableOpacity>
                        )
                    }
                    <Button
                        title='Cadastrar planta'
                       // onPress={handleSave}
                    />
                </View>
            </View>
        </ScrollView>
        )
 }

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape
    },
    plantName: {
        fontFamily: fonts.heading,
        fontSize: 20,
        color: colors.blue,
        marginTop: 15
    },
    plantAbout: {
        textAlign: 'center',
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 17,
        marginTop: 10
    },
    controller: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingBottom: getBottomSpace() || 20
    },
    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        bottom: 60
    },
    tipImage: {
        width: 56,
        height: 56
    },
    tipText:  {
        flex: 1,
        marginLeft: 20,
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 17,
        textAlign: 'justify'
    },
    alertLabel: {
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.blue,
        fontSize: 15,
        marginBottom: 5
    },
    dateTimePickerButton: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 40,
    },
    dateTimePickerText: {
        color: colors.blue,
        fontSize: 24,
        fontFamily: fonts.text
    }
});

