import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Header from '../components/Videos/Header';
import TitleSection from '../components/shop/TitleSection';
import Label from '../components/shop/Label';
import Cards from '../components/shop/Cards';
import Footer from '../components/Search/Footer';

const Shop = () => {
  const {viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Header />
      <TitleSection />
      <Label />
      <Cards />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Shop;
