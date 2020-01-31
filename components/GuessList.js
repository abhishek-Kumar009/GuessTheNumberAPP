import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Card from './Card';
import Colors from '../constants/colors';

const screenWidthLarge = Dimensions.get('window').width > 350 ? true : false;
const GuessList = props => {
  return <Card style={styles.listContainer}>{props.children}</Card>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: 500,
    height: screenWidthLarge ? 50 : 20,
    maxWidth: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.primary
  }
});

export default GuessList;
