import React from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Footer = () => {
  const {containerViewStyle, imageStyle, InputImageStyle, InputViewStyle} =
    styles;
  return (
    <View style={containerViewStyle}>
      <TouchableOpacity style={imageStyle}>
        <Image source={require('../../assets/images/cross.png')} />
      </TouchableOpacity>
      <View style={InputViewStyle}>
        <TextInput />
        <TouchableOpacity style={InputImageStyle}>
          <Image source={require('../../assets/images/file.png')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={imageStyle}>
        <Image source={require('../../assets/images/camera.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={imageStyle}>
        <Image source={require('../../assets/images/microphone.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: '10%',
    backgroundColor: '#000000',
    paddingHorizontal: '5%',
  },
  imageStyle: {
    width: 17,
    height: 17,
  },
  InputViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 32,
    borderWidth: 1,
    width: '60%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  InputImageStyle: {
    width: 10,
    height: 12,
  },
});

export default Footer;
