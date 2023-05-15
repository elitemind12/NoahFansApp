import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const LoginButton = ({navigation}) => {
  const {textStyle, loginButton} = styles;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Register')}
      style={loginButton}>
      <Text style={textStyle}>LOG IN</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#FAFAFB',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 14,
    marginTop: 8,
  },
  loginButton: {
    backgroundColor: '#DB0011',
    width: '38%',
    height: 35,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
  },
});

export default LoginButton;
