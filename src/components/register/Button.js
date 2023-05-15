import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const Button = ({navigation}) => {
  const {ButtonStyle, textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <TouchableOpacity
        style={ButtonStyle}
        onPress={() => navigation.navigate('Home')}>
        <Text style={textStyle}>Submit</Text>
      </TouchableOpacity>
    </View>
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
    fontSize: 16,
    lineHeight: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '10%',
  },
});

export default Button;
