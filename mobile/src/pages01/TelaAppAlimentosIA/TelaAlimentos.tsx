import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import {styles} from '../TelaAppAlimentosIA/stylesAlimentos'
import {Tip} from '../TelaAppAlimentosIA/components/Tip'
import {Item} from '../TelaAppAlimentosIA/components/Item'
import {Button} from '../TelaAppAlimentosIA/components/Button'

export function TelaAlimentos() { 
  const [selectedImageUri, setSelectedImageUri] = useState('');

  async function handleSelectImage() {
    
   }


  return (
    <View style={styles.container}>
      <Button onPress={handleSelectImage} />

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

      <View style={styles.bottom}>
        <Tip message="Aqui vai uma dica" />

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 24 }}>
          <View style={styles.items}>
            <Item data={{ name: 'Vegetal', percentage: '95%' }} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}