import React from 'react';
import { StyleSheet } from 'react-native';
import Card from './Card';
import Colors from '../constants/colors';
const GuessList = props => {
  return <Card style={styles.listContainer}>{props.children}</Card>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: 500,
    height: 50,
    maxWidth: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.primary
  }
});

export default GuessList;
