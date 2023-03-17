import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const RegisterTitle = ({navigation}) => {
  const {viewStyle, imageStyle, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Image
          style={imageStyle}
          source={require('../../assets/images/LineStroke.png')}
        />
      </TouchableOpacity>
      <Text style={textStyle}>Payment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: '15%',
  },
  imageStyle: {
    width: 21,
    height: 19,
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 35,
    color: '#000000',
    lineHeight: 42,
    textAlign: 'center',
    marginLeft: '5%',
  },
});

export default RegisterTitle;
