import React from 'react';
import {View, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import Header from '../components/status/Header';
import FooterWrapper from '../components/status/FooterWrapper';

const Status = () => {
  const {viewStyle, imageBackground} = styles;
  return (
    <View style={viewStyle}>
      <ImageBackground
        style={imageBackground}
        source={require('../assets/images/status_bg.png')}>
        <Header />
        <FooterWrapper />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  imageBackground: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingVertical: 20,
  },
});

export default Status;
