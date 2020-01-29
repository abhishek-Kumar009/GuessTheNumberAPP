import React, { useState, useRef } from 'react';
import { View, StyleSheet, Alert, ScrollView, FlatList } from 'react-native';
import NumberContainer from './NumberContainer';
import Card from './Card';
import MainButton from './MainButton';
import BodyText from './BodyText';
import { Ionicons } from '@expo/vector-icons';
import GuessList from './GuessList';

const generateRandomNumberBtw = (min, max, exclude) => {
  min = Math.floor(min);
  max = Math.ceil(max);
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;
  if (rndNumber === exclude) {
    return generateRandomNumberBtw(min, max, exclude);
  } else {
    return rndNumber;
  }
};
// ############## ScrollView Logic ###############################

// const displayListItems = (guess, index, listLength) => (
//   <GuessList key={guess}>
//     <BodyText style={styles.listText}>{`#${listLength - index}`}</BodyText>
//     <BodyText style={styles.listText}>{guess}</BodyText>
//   </GuessList>
// );

// ############## FlatList Logic ###############################

const displayListItems = (listLength, ItemData) => (
  <GuessList>
    <BodyText style={styles.listText}>#{listLength - ItemData.index}</BodyText>
    <BodyText style={styles.listText}>{ItemData.item}</BodyText>
  </GuessList>
);

const GameScreen = props => {
  const initialGuess = generateRandomNumberBtw(1, 1000, props.userChoice);
  const [currentRandNumber, setCurrentRandNumber] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

  const currentMin = useRef(1);
  const currentMax = useRef(1000);

  const randomGuessHandler = direction => {
    if (
      (direction === 'LOWER' && currentRandNumber < props.userChoice) ||
      (direction === 'GREATER' && currentRandNumber > props.userChoice)
    ) {
      Alert.alert("Don't Lie!", "You know that's not correct huh?", [
        { text: 'Sorry', style: 'cancel' }
      ]);
      return;
    }
    if (direction === 'LOWER') {
      currentMax.current = currentRandNumber;
    } else {
      currentMin.current = currentRandNumber + 1;
    }
    const num = generateRandomNumberBtw(
      currentMin.current,
      currentMax.current,
      currentRandNumber
    );
    setCurrentRandNumber(num);
    setPastGuesses(currPastGuesses => [num.toString(), ...currPastGuesses]);
  };

  if (currentRandNumber === props.userChoice) {
    Alert.alert(
      'Woohoo!',
      `Congratulations! Your number was ${currentRandNumber}`,
      [
        {
          text: 'Cool!',
          style: 'default',
          onPress: props.gameProgress(pastGuesses.length)
        }
      ]
    );
  }

  return (
    <View style={styles.screen}>
      <Card style={styles.cardContainer}>
        <BodyText style={styles.gameScreenText}>Opponent's Guess</BodyText>
        <NumberContainer>{currentRandNumber}</NumberContainer>
        <View style={styles.btnContainer}>
          <MainButton onPress={randomGuessHandler.bind(this, 'LOWER')}>
            <Ionicons name='md-remove' size={24} />
          </MainButton>

          <MainButton onPress={randomGuessHandler.bind(this, 'GREATER')}>
            <Ionicons name='md-add' size={24} />
          </MainButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            displayListItems(guess, index, pastGuesses.length)
          )}
        </ScrollView> */}
        <FlatList
          contentContainerStyle={styles.list}
          keyExtractor={item => item}
          data={pastGuesses}
          renderItem={displayListItems.bind(this, pastGuesses.length)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    alignItems: 'center'
  },
  cardContainer: {
    alignItems: 'center',
    padding: 20
  },
  gameScreenText: {
    color: 'red'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 300,
    maxWidth: '80%',
    marginVertical: 20
  },
  btn: {
    width: '40%'
  },

  listContainer: {
    flex: 1,
    alignItems: 'center'
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  listText: {
    color: 'white'
  }
});

export default GameScreen;
