import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './Card';

interface CardObject {
  id: number;
  text: string;
}

interface GameBoardProps {
  cards: CardObject[];
  onMatch: (text: string) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ cards, onMatch }) => {
  const [flippedCards, setFlippedCards] = useState<CardObject[]>([]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      if (flippedCards[0].text === flippedCards[1].text) {
        onMatch(flippedCards[0].text);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  }, [flippedCards]);

  const handleCardPress = (card: CardObject) => {
    if (flippedCards.length < 2 && !flippedCards.includes(card)) {
      setFlippedCards([...flippedCards, card]);
    }
  };

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <Card
          key={index}
          text={card.text}
          flipped={flippedCards.includes(card)}
          onPress={() => handleCardPress(card)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    
  },
});

export default GameBoard;
