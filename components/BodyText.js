import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';
const screenWidthLarge = Dimensions.get('window').width > 350 ? true : false;

const BodyText = props => {
  return (
    <Text style={{ ...styles.title, ...props.style }}> {props.children} </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-regular',
    fontSize: screenWidthLarge ? 15 : 10
  }
});

export default BodyText;
