import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/Header';
import GameInput from './components/GameInput';
import GameScreen from './components/GameScreen';
import GameOver from './components/GameOver';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [loadedAsset, setLoadedAsset] = useState(false);
  const [count, setCount] = useState(0);

  if (!loadedAsset) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoadedAsset(true)}
        onError={err => console.log(err)}
      />
    );
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameProgressHandler = noOfGuesses => {
    setCount(noOfGuesses);
    setGameOver(true);
  };

  let currentView = <GameInput startGameProp={startGameHandler} />;

  if (userNumber) {
    currentView = (
      <GameScreen
        setGameOver={setGameOver}
        userChoice={userNumber}
        gameProgress={gameProgressHandler}
      />
    );
  }

  if (gameOver) {
    currentView = (
      <GameOver
        numberOfGuesses={count}
        setUserNumber={setUserNumber}
        setGameOver={setGameOver}
        setCount={setCount}
      />
    );
  }

  return (
    <View style={styles.appContainer}>
      <Header />
      {currentView}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
});
