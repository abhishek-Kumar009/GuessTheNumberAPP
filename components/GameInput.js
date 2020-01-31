import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import MainButton from './MainButton';
import TitleText from './TitleText';
import BodyText from './BodyText';
import Card from './Card';
import Colors from '../constants/colors';
import NumberContainer from './NumberContainer';
import Input from './Input';

const screenWidthLarge = Dimensions.get('window').width > 350 ? true : false;

const GameInput = props => {
  const [enteredText, setEnteredText] = useState('');
  const [selectedNumber, setSelectedNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [btnWidth, setBtnWidth] = useState(Dimensions.get('window').width / 4);

  useEffect(() => {
    const updateLayout = () => {
      setBtnWidth(Dimensions.get('window').width / 4);
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

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
    <ScrollView>
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
              <View style={{ width: btnWidth }}>
                <Button
                  color={Colors.secondary}
                  title='RESET'
                  onPress={resetInputHandler}
                />
              </View>
              <View style={{ width: btnWidth }}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 15
  },
  textTitle: {
    marginVertical: 5
  },
  inputContainer: {
    width: '70%',

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
    marginVertical: screenWidthLarge ? 20 : 5,
    width: '94%'
  },

  outputContainer: {
    width: '70%',
    maxWidth: '80%',
    alignItems: 'center',
    padding: 20
  },
  startText: {
    fontFamily: 'open-sans-regular'
  }
  // btn: {
  //   width: Dimensions.get('window').width / 4
  // }
});

export default GameInput;
