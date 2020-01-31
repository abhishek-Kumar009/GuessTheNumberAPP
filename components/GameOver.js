import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Card from './Card';
import NumberContainer from './NumberContainer';
import BodyText from './BodyText';
import TitleText from './TitleText';
import MainButton from './MainButton';

const screenWidthLarge = Dimensions.get('window').width > 350 ? true : false;
const GameOver = props => {
  const [imgContWd, setImgContWd] = useState(
    Dimensions.get('window').width * 0.6
  );
  const [imgContHt, setImgContHt] = useState(
    Dimensions.get('window').width * 0.6
  );
  const [imgContRd, setImgContRd] = useState(
    Dimensions.get('window').width * 0.3
  );

  useEffect(() => {
    const updateLayout = () => {
      setImgContWd(Dimensions.get('window').width * 0.6);
      setImgContHt(Dimensions.get('window').width * 0.6);
      setImgContRd(Dimensions.get('window').width * 0.3);
    };

    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  const restartHandler = () => {
    props.setUserNumber();
    props.setGameOver(false);
    props.setCount(0);
  };
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText style={styles.gameOver}>Game Over!</TitleText>
        <View
          style={{
            width: imgContWd,
            height: imgContHt,
            borderRadius: imgContRd,
            borderColor: 'black',
            overflow: 'hidden',
            marginVertical: Dimensions.get('window').height / 40
          }}
        >
          <Image
            style={styles.image}
            source={require('../assets/ON40RS0.jpg')}
          />
        </View>
        <Card style={styles.cardContainer}>
          <BodyText style={styles.gameOverText}>Number of guesses</BodyText>
          <NumberContainer> {props.numberOfGuesses} </NumberContainer>
          <MainButton style={styles.btnCustom} onPress={restartHandler}>
            RESTART
          </MainButton>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  cardContainer: {
    alignItems: 'center',
    width: screenWidthLarge
      ? Dimensions.get('window').width * 0.7
      : Dimensions.get('window').width * 0.6,
    maxWidth: '80%'
  },
  gameOver: {
    fontSize: Dimensions.get('window').width > 350 ? 30 : 20
  },
  gameOverText: {
    fontFamily: 'open-sans-regular'
  },
  btnCustom: {
    marginBottom: 7
  }
});

export default GameOver;
