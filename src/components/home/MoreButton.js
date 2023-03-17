import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const MoreButton = () => {
  const {viewStyle, imageStyle} = styles;
  return (
    <TouchableOpacity style={viewStyle}>
      <Image
        style={imageStyle}
        source={require('../../assets/images/Rectangle.png')}
      />
      <Image
        style={imageStyle}
        source={require('../../assets/images/Rectangle.png')}
      />
      <Image
        style={imageStyle}
        source={require('../../assets/images/Rectangle.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
  imageStyle: {
    width: 4,
    height: 4,
    backgroundColor: '#A4A4A4',
    marginBottom: 3,
  },
});

export default MoreButton;
