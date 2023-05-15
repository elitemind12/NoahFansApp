import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({navigation}) => {
  const {ButtonStyle, textStyle} = styles;
  return (
    <TouchableOpacity
      style={ButtonStyle}
      onPress={() => navigation.navigate('Home')}>
      <Text style={textStyle}>REGISTER</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ButtonStyle: {
    width: 228,
    height: 48,
    borderRadius: 20,
    backgroundColor: '#DB0011',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 15,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default Button;
