import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Header = () => {
  const {viewStyle, imageStyle} = styles;
  return (
    <View style={viewStyle}>
      <Image
        style={imageStyle}
        source={require('../../assets/images/Vector1.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    position: 'absolute',
    top: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    alignContent: 'center',
    alignItems: 'center',
    height: '5%',
  },
  imageStyle: {
    width: 23,
    height: 25,
  },
});

export default Header;
