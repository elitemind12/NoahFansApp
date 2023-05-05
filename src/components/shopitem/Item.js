import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Item = () => {
  const {viewStyle, imageStyle, containerViewStyle} = styles;
  return (
    <View style={containerViewStyle}>
      <View style={viewStyle}>
        <Image
          style={imageStyle}
          source={require('../../assets/images/SHIRT.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerViewStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    width: '100%',
    height: '40%',
  },
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#C4C4C4',
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    width: '80%',
    height: '80%',
  },
});

export default Item;
