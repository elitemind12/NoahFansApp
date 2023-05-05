import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Footer from '../components/Search/Footer';
import Header from '../components/Videos/Header';
import TitleSection from '../components/events/TitleSection';
import Cards from '../components/events/Cards';
import Title from '../components/events/Title';

const Events = () => {
  const {viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Header />
      <TitleSection />
      <Title title="Schedule" />
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

export default Events;
