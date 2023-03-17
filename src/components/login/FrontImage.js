import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const FrontImage = () => {
  const {viewStyle, imageStyle} = styles;
  return (
    <View style={viewStyle}>
      <Image
        style={imageStyle}
        source={require('../../assets/images/loginCover.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '15%',
  },
});

export default FrontImage;
