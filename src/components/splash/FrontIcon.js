import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const FrontIcon = () => {
  const {imageStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Image
        style={imageStyle}
        source={require('../../assets/images/cover_icon.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 128,
    height: 67,
  },
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: '5%',
  },
});

export default FrontIcon;
