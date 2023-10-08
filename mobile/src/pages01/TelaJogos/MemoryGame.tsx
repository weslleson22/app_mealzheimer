// MemoryGame.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GameBoard from './GameBoard';
import { Button } from '../../components/Button';

export function MemoryGame() {
    const [cards, setCards] = useState(generateCards());
    const [score, setScore] = useState(0);
    const [moves, setMoves] = useState(0);
    const [timer, setTimer] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimer(prevTime => prevTime + 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    function generateCards() {
      const symbols = ['🍎', '🍌', '🍇', '🍉', '🍊', '🍋', '🍓', '🥭'];
      const allCards = [...symbols, ...symbols];
      return allCards.map((text, index) => ({ id: index, text }));
    }
  
    const handleMatch = (text: string) => {
      setScore(prevScore => prevScore + 1);
      setMoves(prevMoves => prevMoves + 1);
  
      setCards(cards => cards.filter(card => card.text !== text));
    };
  
    const handleReset = () => {
      setCards(generateCards());
      setScore(0);
      setMoves(0);
      setTimer(0);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pontuação: {score}</Text>
        <Text style={styles.text}>Tempo: {timer} segundos</Text>
        <GameBoard cards={cards} onMatch={handleMatch} />
        <Button title="Reiniciar o Jogo" onPress={handleReset} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      marginBottom: 10,
    },
  });
