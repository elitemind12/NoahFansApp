import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const userInput = () => {
  const {inputStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <TextInput
        style={inputStyle}
        placeholderTextColor={'#000000'}
        placeholder="username"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 37,
    width: '90%',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderRadius: 20,
    paddingLeft: 20,
    fontSize: 14,
    lineHeight: 15,
    fontFamily: 'Roboto',
  },
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '7%',
  },
});

export default userInput;
