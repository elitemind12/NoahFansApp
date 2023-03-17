import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Header = () => {
  const {viewStyle, imageStyle} = styles;
  return (
    <View style={viewStyle}>
      <Image
        style={imageStyle}
        source={require('../../assets/images/Vector.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    position: 'absolute',
    width: '100%',
    height: '5%',
    padding: '5%',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#000000',
  },
  imageStyle: {
    tintColor: 'white',
  },
});

export default Header;
