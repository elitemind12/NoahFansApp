import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ForgotPassword = () => {
  const {viewStyle, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>forgot password ?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: '12%',
  },
  textStyle: {
    color: '#FFFFFFB2',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 15,
  },
});

export default ForgotPassword;
