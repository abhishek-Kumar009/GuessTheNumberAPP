import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Alert,
  Keyboard
} from 'react-native';
import MainButton from './MainButton';
import TitleText from './TitleText';
import BodyText from './BodyText';
import Card from './Card';
import Colors from '../constants/colors';
import NumberContainer from './NumberContainer';
import Input from './Input';

const GameInput = props => {
  const [enteredText, setEnteredText] = useState('');
  const [selectedNumber, setSelectedNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);

  const inputHandler = enteredText => {
    setEnteredText(enteredText.replace(/[^0-9]/g, ''));
  };

  const confirmInputHandler = () => {
    const num = parseInt(enteredText);
    if (isNaN(num) || num <= 0 || num > 999) {
      Alert.alert('Invalid Number!', 'Number should be between 1 and 999', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler }
      ]);
    } else {
      setSelectedNumber(num);
      setEnteredText('');
      setConfirmed(true);
      Keyboard.dismiss();
    }
  };
  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.outputContainer}>
        <BodyText style={styles.startText}>You selected:</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.startGameProp(selectedNumber)}>
          START
        </MainButton>
      </Card>
    );
  }

  const resetInputHandler = () => {
    setEnteredText('');
    Keyboard.dismiss();
    setConfirmed(false);
    setSelectedNumber();
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.mainContainer}>
        <View>
          <TitleText style={styles.textTitle}>Start a new Game!</TitleText>
        </View>
        <Card style={styles.inputContainer}>
          <BodyText style={styles.genInfo}>Enter a number</BodyText>
          <View style={styles.textArea}>
            <Input
              style={styles.text}
              value={enteredText}
              onChangeText={inputHandler}
              autoCapitalize='none'
              autoCorrect={false}
              blurOnSubmit={true}
              keyboardType='number-pad'
              maxLength={3}
            />
          </View>

          <View style={styles.submitType}>
            <View style={styles.btn}>
              <Button
                color={Colors.secondary}
                title='RESET'
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.btn}>
              <Button
                color={Colors.primary}
                title='CONFIRM'
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 15
  },
  textTitle: {
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  genInfo: {
    marginBottom: 5
  },
  textArea: {
    width: 100,
    height: 50
  },
  text: {
    fontSize: 16,
    borderBottomWidth: 0.5,
    padding: 5
  },
  submitType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    width: '80%'
  },

  outputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    padding: 20
  },
  startText: {
    fontFamily: 'open-sans-regular'
  },
  btn: {
    width: '40%'
  }
});

export default GameInput;
