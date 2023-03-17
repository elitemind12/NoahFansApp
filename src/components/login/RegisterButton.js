import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const RegisterButton = ({navigation}) => {
  const {registerButton, textStyle} = styles;
  return (
    <TouchableOpacity
      style={registerButton}
      onPress={() => navigation.navigate('Register')}>
      <Text style={textStyle}>REGISTER</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  registerButton: {
    width: '38%',
    height: 35,
    borderRadius: 10,
    backgroundColor: '#ECECEE',
    display: 'flex',
    alignItems: 'center',
  },
  textStyle: {
    color: '#1B1C1B',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 14,
    marginTop: 8,
  },
});

export default RegisterButton;
