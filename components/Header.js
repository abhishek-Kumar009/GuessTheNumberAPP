import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/colors';
import TitleText from './TitleText';

const screenWidthLarge = Dimensions.get('window').width > 350 ? true : false;

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
    height: screenWidthLarge ? 80 : 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    marginVertical: 10,
    fontSize: screenWidthLarge ? 24 : 18
  }
});

export default Header;
