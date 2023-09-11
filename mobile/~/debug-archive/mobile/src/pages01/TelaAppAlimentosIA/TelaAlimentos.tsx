import { useState } from 'react';
import { Alert, Image, ScrollView, Text, View } from 'react-native';
import { styles } from '../TelaAppAlimentosIA/stylesAlimentos'
import { Tip } from '../TelaAppAlimentosIA/components/Tip'
import { Item, ItemProps } from '../TelaAppAlimentosIA/components/Item'
import { Button } from '../TelaAppAlimentosIA/components/Button'
import * as ImgePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { api_IA } from "../../services/api_IA";
import { Loading } from './components/Loading';
import { foodContains } from './utils/foodContains';
export function TelaAlimentos() {
  const [selectedImageUri, setSelectedImageUri] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [items, setItems] = useState<ItemProps[]>([]);
  const [message, setMessage] = useState('');




  async function handleSelectImage() {

    try {

      const { status } = await ImgePicker.requestMediaLibraryPermissionsAsync();

      if (status !== ImgePicker.PermissionStatus.GRANTED) {
        return Alert.alert("É necessario conceder permissão para acessar sua galeria!")
      }
      setIsLoading(true)

      const response = await ImgePicker.launchImageLibraryAsync({
        mediaTypes: ImgePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1
      })
      if (response.canceled) {
        return setIsLoading(false)
      }


      if (!response.canceled) {

        const imgManipuled = await ImageManipulator.manipulateAsync(
          response.assets[0].uri,
          [{ resize: { width: 900 } }],
          {
            compress: 1,
            format: ImageManipulator.SaveFormat.JPEG,
            base64: true
          }
        )
        setSelectedImageUri(imgManipuled.uri)
        foodDetect(imgManipuled.base64)
        console.log("Image ok")

      }

    } catch (error) {

      console.log(error)
    }

  }

  async function foodDetect(imageBase64: string | undefined) {
    // console.log(imageBase64)
    try {

      /**
       * 
  curl -X POST "https://api.clarifai.com/v2/users/clarifai/apps/main/models/general-image-recognition/versions/aa7f35c01e0642fda5cf400f543e7c40/outputs"   -H "Authorization: Key 57aac8716e5a456591426e42797f728f"   -H "Content-Type: application/json"   -d '{
      "inputs": [
        {
          "data": {
            "image": {
              "url": "https://samples.clarifai.com/metro-north.jpg"
            }
          }
        }
      ]
    }'
       */
      const response = await api_IA.post(`https://api.clarifai.com/v2/users/clarifai/apps/main/models/${process.env.EXPO_PUBLIC_API_MODEL_ID}/versions/${process.env.EXPO_PUBLIC_API_MODEL_VERSION_ID}/outputs`, {
        "user_app_id": {
          "user_id": process.env.EXPO_PUBLIC_API_USER_ID,


        },
        "inputs": [
          {
            "data": {
              "image": {
                "base64": imageBase64
              }
            }
          }
        ]
      })

      /* const concept = response.data.outputs[0].data.concepts.map((concept:any)=>{
          return {
            name: concept.name,
            percentage: `${concept.value * 100} %`
          }
          
        })*/
      const foods = response.data.outputs[0].data.concepts.map((concept: any) => {
        return {
          name: concept.name,
          percentage: `${Math.round(concept.value * 100)}%`
        }
      })
      const isVegetable = foodContains(foods, 'vegetable');
      setMessage(isVegetable? '': 'Adicione vegetais em seu prato!');
      setIsLoading(false)
      setItems(foods);
      console.log("Tudo ok")
    } catch (error) {

      console.log("Erro:", error)
    }

    /*/const isVegetable = foodContains(concept,'vegetable');
    setMessage( isVegetable ? '' : 'Adiciona vegetais no seu prato!')

    setItem(concept)
    setIsLoading(false)*/
  }

  //EXPO_PUBLIC_API_APP_ID=front_mealzheimer_app
  //EXPO_PUBLIC_API_USER_ID=app123456789
  return (
    <View style={styles.container}>
      <Button onPress={handleSelectImage} disabled={isLoading} />

      {
        selectedImageUri ?
          <Image
            source={{ uri: selectedImageUri }}
            style={styles.image}
            resizeMode="cover"
          />
          :
          <Text style={styles.description}>
            Selecione a foto do seu prato para analizar.
          </Text>
      }

      <View style={styles.bottom} >
        {message && <Tip message={message} />}
        {
         isLoading ?<Loading/>:
         <>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 24 }}>
          <View style={styles.items}>
            {
              items.map((item)=>(
                <Item key={item.name} data={item}/>
              ))
            }
          </View>
        </ScrollView>
          </>}
      </View>
    </View>
  );
}