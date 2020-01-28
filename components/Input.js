import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = props => {
  return (
    <View>
      <TextInput {...props} style={{ ...styles.input, ...props.style }} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'grey',
    height: 30,
    textAlign: 'center',
    borderBottomWidth: 1,
    backgroundColor: 'white'
  }
});

export default Input;
