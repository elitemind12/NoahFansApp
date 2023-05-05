import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const ImageSection = () => {
  const {viewStyle, picture1, picture2, picture3, textStyle, centerViewStyle} =
    styles;
  return (
    <View style={viewStyle}>
      <Image
        style={picture1}
        source={require('../../assets/images/song1.png')}
      />
      <View style={centerViewStyle}>
        <Image
          style={picture2}
          source={require('../../assets/images/song2.png')}
        />
        <Text style={textStyle}>Taman Langit</Text>
      </View>
      <Image
        style={picture3}
        source={require('../../assets/images/song3.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'center',
    height: '20%',
    marginBottom: 5,
  },
  picture1: {
    width: 80,
    height: 80,
  },
  picture2: {
    width: 118,
    height: 118,
  },
  picture3: {
    width: 80,
    height: 80,
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 17,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    margin: 3,
  },
  centerViewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default ImageSection;
