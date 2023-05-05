import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Footer from '../components/Search/Footer';
import TitleSection from '../components/events/TitleSection';
import Header from '../components/Videos/Header';
import Title from '../components/events/Title';
import Message from '../components/shopitem/Message';
import FrontTitle from '../components/events/Title';
import ShopTitle from '../components/shopitem/ShopTitle';
import Item from '../components/shopitem/Item';
import Size from '../components/shopitem/Size';

const ShopItem = () => {
  const {viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Header />
      <TitleSection />
      <Title title="Shop | Clothing" />
      <FrontTitle title="T-shirt" />
      <Item />
      <ShopTitle />
      <Size />
      <Message />
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

export default ShopItem;
