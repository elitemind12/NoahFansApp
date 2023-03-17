import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Label = () => {
  const {viewStyle, textStyle, imageWrapper, image} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Noah</Text>
      <View style={imageWrapper}>
        <Image
          style={image}
          source={require('../../assets/images/jewel.png')}
        />
        <Image
          style={image}
          source={require('../../assets/images/jewel.png')}
        />
        <Image
          style={image}
          source={require('../../assets/images/jewel.png')}
        />
        <Image
          style={image}
          source={require('../../assets/images/jewel.png')}
        />
        <Image
          style={image}
          source={require('../../assets/images/jewel.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    height: '10%',
    width: '100%',
    paddingHorizontal: 20,
    borderTopColor: '#D0D0D1',
    borderTopWidth: 5,
    borderBottomColor: '#D0D0D1',
    borderBottomWidth: 5,
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 19,
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 5,
    width: 15.5,
    height: 14,
  },
  image: {
    width: 15.5,
    height: 14,
    marginRight: 5,
  },
});

export default Label;
