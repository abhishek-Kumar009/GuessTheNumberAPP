import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import TitleText from './TitleText';

const Header = props => {
  return (
    <View style={styles.headerContainer}>
      <TitleText style={styles.heading}>Guess a number</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 36,
    width: '100%',
    height: 80,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    marginVertical: 10,
    fontSize: 24
  }
});

export default Header;
