import React from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../constants/colors';
import TitleText from './TitleText';

const screenWidthLarge = Dimensions.get('window').width > 350 ? true : false;

const Header = props => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.iosStyle,
          android: styles.androidStyle
        })
      }}
    >
      <TitleText style={styles.heading}>Guess a number</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    padding: 36,
    width: '100%',
    height: screenWidthLarge ? 80 : 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iosStyle: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1
  },
  androidStyle: {
    backgroundColor: Colors.primary
  },
  heading: {
    marginVertical: 10,
    fontSize: screenWidthLarge ? 24 : 18
  }
});

export default Header;
