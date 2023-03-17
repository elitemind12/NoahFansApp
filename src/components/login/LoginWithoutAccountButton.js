import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const LoginWithoutAccountButton = () => {
  const {button, textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <TouchableOpacity style={button}>
        <Text style={textStyle}>login without account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    boxSizing: 'border-box',
    width: '65%',
    height: 32,
    borderWidth: 1,
    borderColor: '#FFFFFF80',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
  },
  textStyle: {
    color: '#EDEDEDB2',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 15,
    marginTop: 6,
  },
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '4%',
  },
});

export default LoginWithoutAccountButton;
