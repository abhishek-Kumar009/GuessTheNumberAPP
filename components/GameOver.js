import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import Card from './Card';
import NumberContainer from './NumberContainer';
import Colors from '../constants/colors';
import BodyText from './BodyText';
import TitleText from './TitleText';
import MainButton from './MainButton';
const GameOver = props => {
  const restartHandler = () => {
    props.setUserNumber();
    props.setGameOver(false);
    props.setCount(0);
  };
  return (
    <View style={styles.screen}>
      <TitleText style={styles.gameOver}>Game Over!</TitleText>
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={require('../assets/ON40RS0.jpg')} />
      </View>
      <Card style={styles.cardContainer}>
        <BodyText style={styles.gameOverText}>Number of guesses</BodyText>
        <NumberContainer> {props.numberOfGuesses} </NumberContainer>
        <MainButton style={styles.btnCustom} onPress={restartHandler}>
          RESTART
        </MainButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    alignItems: 'center'
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,

    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 15
  },
  image: {
    width: '100%',
    height: '100%'
  },
  cardContainer: {
    alignItems: 'center',
    width: 300,
    maxWidth: '80%'
  },
  gameOver: {
    fontSize: 30
  },
  gameOverText: {
    fontFamily: 'open-sans-regular'
  },
  btnCustom: {
    marginBottom: 7
  }
});

export default GameOver;
