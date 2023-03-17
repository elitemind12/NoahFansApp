import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const FrontImage = () => {
  const {imageStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Image
        style={imageStyle}
        source={require('../../assets/images/cover.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 296,
    height: 142,
  },
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingBottom: '10%',
  },
});

export default FrontImage;
