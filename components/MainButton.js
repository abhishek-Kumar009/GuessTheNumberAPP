import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  TouchableNativeFeedback
} from 'react-native';
import Colors from '../constants/colors';

const MainButton = props => {
  let ButtonComponent = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonBox}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={{ ...styles.btnContainer, ...props.style }}>
          <Text style={styles.btnText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBox: {
    borderRadius: 25,
    overflow: 'hidden'
  },
  btnContainer: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  btnText: {
    color: 'white',
    fontFamily: 'open-sans-regular',
    fontSize: 18
  }
});

export default MainButton;
