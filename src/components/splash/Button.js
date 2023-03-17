import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

const Button = ({navigation}) => {
  const {textStyle, buttonStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => navigation.navigate('Login')}>
        <Text style={textStyle}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 500,
    fontStyle: 'normal',
    color: '#FFFFFF',
  },
  buttonStyle: {
    backgroundColor: '#DB0011',
    borderRadius: 20,
    width: 68,
    height: 20,
    display: 'flex',
    alignItems: 'center',
  },
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Button;
