import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';

const LoginWithGoogle = () => {
  const {button, imageStyle, textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <TouchableOpacity style={button}>
        <Image
          style={imageStyle}
          source={require('../../assets/images/google.png')}
        />
        <Text style={textStyle}>CONTINUE WITH GOOGLE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '65%',
    height: 32,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#696969',
    borderWidth: 1,
    borderRadius: 16,
  },
  imageStyle: {
    width: 12,
    height: 12,
  },
  textStyle: {
    color: '#696969',
    fontSize: 10,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    marginTop: 2,
    marginLeft: 10,
    lineHeight: 11,
  },
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginWithGoogle;
