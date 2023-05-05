import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Footer from '../components/Search/Footer';
import TitleSection from '../components/events/TitleSection';
import Header from '../components/Videos/Header';
import Title from '../components/events/Title';
import Groups from '../components/shopgroup/Groups';

const ShopGroup = () => {
  const {viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Header />
      <TitleSection />
      <Title title="Shop | Clothing" />
      <Groups />
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

export default ShopGroup;
