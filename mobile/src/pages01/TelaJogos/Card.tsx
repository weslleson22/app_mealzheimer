import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CardProps {
  onPress: () => void;
  text: string;
  flipped: boolean;
}

const Card: React.FC<CardProps> = ({ onPress, text, flipped }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.card, flipped ? styles.flipped : {}]}
  >
    {flipped ? <Text style={styles.text}>{text}</Text> : null}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: 80,
    height: 80,
    backgroundColor: '#ccc',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flipped: {
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
  },
});

export default Card;
