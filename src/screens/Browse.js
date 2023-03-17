import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Header from '../components/Search/Header';
import Links from '../components/Search/Links';
import Tags from '../components/Search/Tags';
import Cards from '../components/Search/Cards';
import Footer from '../components/Search/Footer';

const Browse = () => {
  const {viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Header />
      <Links />
      <Tags />
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
    backgroundColor: '#E5E5E5',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Browse;
