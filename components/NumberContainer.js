import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.number}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    marginVertical: 10
  },
  numberText: {
    alignItems: 'center'
  },
  number: {
    borderColor: Colors.secondary,
    borderWidth: 3,
    padding: 10,
    marginVertical: Dimensions.get('window').width > 350 ? 10 : 5,
    borderRadius: 5,
    width: 70,
    alignItems: 'center'
  },
  text: {
    fontSize: Dimensions.get('window').width > 350 ? 25 : 15
  }
});

export default NumberContainer;
