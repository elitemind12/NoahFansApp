import React from 'react';
import {View, Dimensions, StyleSheet, ImageBackground} from 'react-native';
import Footer from '../components/Search/Footer';
import Header from '../components/Videos/Header';
import Title from '../components/songs/Title';
import Cards from '../components/songs/Cards';
import ImageSection from '../components/songs/ImageSection';

const Songs = () => {
  const {viewStyle, imageBackground} = styles;
  return (
    <View style={viewStyle}>
      <ImageBackground
        source={require('../assets/images/house.png')}
        style={imageBackground}>
        <Header />
        <Title />
        <ImageSection />
        <Cards />
        <Footer />
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
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Songs;
