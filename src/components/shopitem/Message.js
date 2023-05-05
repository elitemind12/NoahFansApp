import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const Message = () => {
  const {viewStyle, imageStyle} = styles;
  return (
    <TouchableOpacity style={viewStyle}>
      <Image
        style={imageStyle}
        source={require('../../assets/images/Cart.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#696969',
    position: 'absolute',
    width: 54,
    height: 54,
    left: '78%',
    top: '83%',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 33,
    height: 29,
    tintColor: 'white',
  },
});

export default Message;
