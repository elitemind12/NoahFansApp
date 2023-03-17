import React from 'react';
import {Image, StyleSheet} from 'react-native';

const CardFront = () => {
  const {imageStyle} = styles;
  return (
    <Image
      style={imageStyle}
      source={require('../../assets/images/Card-Front.png')}
    />
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: 210,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#EDEDED',
    backgroundColor: '#F5F5F5',
  },
});

export default CardFront;
